import {popologyConfig, PropertyCategorizationType} from "@/config/popologyConfig";
import {Property, NestedProperty} from "@/types/popology";

/**
 * Converts a standard list of stats for a module into data organized for a UI presentation. This system uses
 * UIOrganizedProperty, which contains a property with optional subproperties.
 */
export class UIOrganizedModuleData {
    private readonly stats: Property[];

    /**
     * @param stats
     */
    constructor(stats: Property[]) {
        this.stats = stats;
    }

    getOrganizedData() {
        let workingData: Property[] = [...this.stats];

        // The data that defines how stats are organized
        const categorization = popologyConfig.propertyCategorization;

        // Nested property map
        const nestedProps = new Map<string, UIOrganizedProperty>();

        // Create nested properties
        workingData.forEach(prop => {
            categorization.nestedProperties.forEach(nestedProperty => {
                if (prop.property_name == nestedProperty.name) {
                    nestedProps.set(nestedProperty.name, new UIOrganizedProperty(prop));
                }
            })
        })

        // Remove added properties
        workingData = workingData.filter(
            prop => !nestedProps.has(prop.property_name)
        );

        // Add subproperties
        // Store names to remove from working data
        const subPropertiesToRemove: string[] = [];

        nestedProps.forEach((organizedProperty, name) => {
            const config = categorization.nestedProperties.find(
                np => np.name === name
            );

            // All subproperties for this property
            const subProperties = config?.subProperties;

            // Find existing subproperties for this property
            workingData.forEach(prop => {
                if (subProperties && subProperties.includes(prop.property_name)) {
                    organizedProperty.addSubProperty(prop);
                    subPropertiesToRemove.push(prop.property_name);
                }
            })
        })

        // Remove added subproperties
        workingData = workingData.filter(
            prop => !subPropertiesToRemove.includes(prop.property_name)
        )

        // Standard properties
        const standardProperties: UIOrganizedProperty[] = [];
        workingData.forEach(prop => {
            standardProperties.push(new UIOrganizedProperty(prop));
        })

        // Standout properties
        const standoutProperties: UIOrganizedProperty[] = [];

        nestedProps.forEach((prop, name) => {
            const config = categorization.nestedProperties.find(
                np => np.name === name
            );

            // Push this property to standout properties if the property should be displayed seperately when there are
            // subproperties present
            if (config?.displaySeperatelyWhenNested && prop.subProperties.length > 0) {
                standoutProperties.push(prop);
            } else {
                standardProperties.push(prop);
            }
        });

        return {standoutProperties, standardProperties};
    }
}

export class UIOrganizedProperty {
    mainProperty: Property;
    subProperties: Property[];

    constructor(property: Property) {
        this.mainProperty = property;
        this.subProperties = [];
    }

    addSubProperty(property: Property) {
        this.subProperties.push(property);
    }
}

export class ModulePropertyOrganizer {
    private readonly stats: Property[];
    private readonly propertyCategorization: PropertyCategorizationType;

    nestedProperties: NestedProperty[];

    constructor(stats: Property[], propertyCategorization: PropertyCategorizationType) {
        this.stats = stats;
        this.propertyCategorization = propertyCategorization;
        this.nestedProperties = [];

        this.createInitialNestedProperties();
    }

    private createInitialNestedProperties() {
        // Names of all properties that have nested properties inside (ex. "damage")
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
    }
}