import React, {useContext} from "react";
import {TowerDataContext} from "@/app/definitions";
import {ClientTowerData, Module, Property} from "@/types/popology";
import {UIOrganizedModuleData, UIOrganizedProperty} from "@/lib/modulePropertyOrganizer";
import {propertyNameConversion} from "@/lib/propertyNameConversion";

function PropertyElementKeyValue({property}: { property: Property }) {
    return <div className="flex flex-col">
        <p className="text-lg leading-tight">{property.value}</p>
        <p className="text-sm leading-tight">{propertyNameConversion(property.property_name)}</p>
    </div>;
}

function PropertyElement({property}: { property: UIOrganizedProperty }) {


    return <div className="bg-gray-200 px-2 py-1.5 rounded-lg flex flex-row">
        <PropertyElementKeyValue property={property.mainProperty}/>
    </div>;
}

function PropertyElementSubProperties({properties}: { properties: Property[] }) {
    const subPropertyElements: React.ReactElement[] = [];
    properties.forEach(property => {
        subPropertyElements.push(<PropertyElementKeyValue property={property}
            key={`${data.name}-${property.mainProperty.property_name}`}/>)
    })

    return <div className="flex flex-row gap-2">

    </div>;
}

function Module({data}: { data: Module }) {
    let name = "unknown module";

    if (data.name) {
        if (data.name === "tower-stats") {
            name = "tower stats";
        } else if (data.module_type) {
            name = `${data.name} ${data.module_type}`;
        } else {
            name = `${data.name} module`;
        }
    }

    const organizedData = new UIOrganizedModuleData(data.stats).getOrganizedData();

    const standoutPropertyElements: React.ReactElement[] = [];
    organizedData.standoutProperties.forEach(property => {
        standoutPropertyElements.push(<PropertyElement property={property}
            key={`${data.name}-${property.mainProperty.property_name}`}/>)
    })

    const standardPropertyElements: React.ReactElement[] = [];
    organizedData.standardProperties.forEach(property => {
        standardPropertyElements.push(<PropertyElement property={property}
            key={`${data.name}-${property.mainProperty.property_name}`}/>)
    })

    return <div>
        <div className="ml-2 flex gap-4 items-end">
            <h3 className="-mb-[5px]">{name}</h3>
            <p className="monosp opacity-60">tower-stats module</p>
        </div>
        <div className="bg-white dark:bg-zinc-800 drop-shadow-xl/20 p-2 rounded-xl flex flex-col gap-2">

            {/* Standout properties */}
            {standoutPropertyElements.length > 0 && (
                <div className="flex flex-col gap-2 items-start">
                    {standoutPropertyElements}
                </div>
            )}

            {/* Standard properties */}
            {standardPropertyElements.length > 0 && (
                <div className="flex flex-row gap-2">
                    {standardPropertyElements}
                </div>
            )}

        </div>
    </div>
}

export function StatsPageContent() {
    const towerData: ClientTowerData = useContext(TowerDataContext);

    // Array to store the React element for each module
    const modules: React.ReactElement[] = [];

    towerData.tower_modules.forEach(module => {
        const key = `Module_${module.name}_${module.module_type}`

        modules.push(<Module key={key} data={module}/>);
    })

    return <div className="flex items-center justify-center px-8">
        <div className="w-full max-w-300 mt-12 flex flex-col gap-4">
            {towerData.tower_stats_module ? <Module data={towerData.tower_stats_module}/> : <></>}
            {modules}
        </div>
    </div>
}