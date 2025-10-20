import React, {useContext} from "react";
import {TowerDataContext} from "@/app/definitions";
import {ClientTowerData, Module} from "@/types/popology";
import {popologyConfig} from "@/config/popologyConfig";
import {ModulePropertyOrganizer} from "@/lib/modulePropertyOrganizer";

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

    const organizer = new ModulePropertyOrganizer(data.stats, popologyConfig.propertyCategorization);


    // const damagePropertyData: PropertyComponentData[] = [];
    // const damageBonusPropertyData: PropertyComponentData[] = [];
    // const standardPropertyData: PropertyComponentData[] = [];
    // const overflowPropertyData: PropertyComponentData[] = [];
    //
    // data.stats.forEach(property => {
    //     const componentData = {
    //         data: property,
    //         displayName: propertyNameConversion(property.property_name),
    //         key: `Property_${name}_${property.property_name}`
    //     }
    //     const categorization = popologyConfig.propertyCategorization;
    //
    //     if (categorization.damage.includes(property.property_name)) {
    //         damagePropertyData.push(componentData);
    //     } else if (categorization.damageBonuses.includes(property.property_name)) {
    //         damageBonusPropertyData.push(componentData);
    //     } else if (categorization.standard.includes(property.property_name)) {
    //         standardPropertyData.push(componentData);
    //     } else {
    //         overflowPropertyData.push(componentData);
    //     }
    // })

    //     const key = `Property_${name}_${property.property_name}`

    return <div>
        <div className="ml-2 flex gap-4 items-end">
            <h3 className="-mb-[5px]">{name}</h3>
            {/*<p className="monosp opacity-60">tower-stats module</p>*/}
        </div>
        <div className="bg-white dark:bg-zinc-800 drop-shadow-xl/20 p-2 rounded-xl flex flex-col gap-2">

        </div>
    </div>
}

export function StatsPageContent() {
    const towerData: ClientTowerData = useContext(TowerDataContext);

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