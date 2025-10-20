import {PropertyCategorizationType} from "@/config/popologyConfig";
import {Property, NestedProperty} from "@/types/popology";


export class ModulePropertyOrganizer {
    private stats: Property[];
    private propertyCategorization: PropertyCategorizationType;

    private nestedProperties: NestedProperty[];

    constructor(stats: Property[], propertyCategorization: PropertyCategorizationType) {
        this.stats = stats;
        this.propertyCategorization = propertyCategorization;
        this.nestedProperties = [];

        this.createInitialNestedProperties();
    }

    private createInitialNestedProperties() {
        // Names of all properties that have nested properties inside
        const nestedPropertyNames: string[] = this.propertyCategorization.nestedProperties.map(
            nestedProperty => nestedProperty.name
        );


        nestedPropertyNames.forEach(propertyName => {
            this.nestedProperties.push({
                property_name: propertyName,
                value: undefined,
                nested: []
            })
        })

        // Lookup from property_name -> nestedProperty object
        const nestedPropByName = new Map<string, { property_name: string; nested: any[] }>(
            this.nestedProperties.map(p => [p.property_name, p])
        );

        // Build a map of stats grouped by property_name
        const statsByName = new Map<string, any[]>();
        for (const stat of this.stats) {
            const arr = statsByName.get(stat.property_name);
            if (arr) arr.push(stat);
            else statsByName.set(stat.property_name, [stat]);
        }

        // Wire them up with lookups
        for (const nestedPropertyCategorization of this.propertyCategorization.nestedProperties) {
            const nestedPropertyName = nestedPropertyCategorization.name;

            const target = nestedPropByName.get(nestedPropertyName);
            if (!target) continue;

            for (const subPropertyName of nestedPropertyCategorization.subProperties) {
                const matchingStats = statsByName.get(subPropertyName);
                if (matchingStats && matchingStats.length) {
                    // push all matches at once
                    target.nested.push(...matchingStats);
                }
            }
        }

        console.log(this.nestedProperties);
    }
}