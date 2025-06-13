import React, {ReactNode} from "react";
import {categoryStyles} from "@/styles/towerCategoryStyles";
import {Category} from "@/app/definitions";
import HorizontalStatsContainer from "@/components/horizontalStatsContainer";
import SimpleNameValue from "@/components/simpleNameValue";

type StatsTowerPageHeaderProps = { displayName: string, category: Category }

async function StatsTowerPageHeader({displayName, category}: StatsTowerPageHeaderProps) {
    return <div className={`p-3 rounded-2xl border-2 border-solid border-${category}-light`}>
        <h1 className={`underline ${categoryStyles[category].decoration} decoration-solid`}>
            {displayName}
        </h1>
        <p className="monosp text-sm">{category}</p>
    </div>
}

type TowerStatsModuleContainerProps = { stats: any, category: Category }

async function TowerStatsModuleContainer({stats, category}: TowerStatsModuleContainerProps) {
    const towerModuleProperties = stats.tower_stats_module.stats
    const towerStatNodes = towerModuleProperties.map(
        (prop: { property_name: string; value: string; }) =>
            <SimpleNameValue name={prop.property_name} value={prop.value}
                             key={`${stats.tower_stats_module.name} ${prop.property_name}`} />)

    return <div className={`p-3 rounded-2xl border-2 border-solid border-${category}-light`}>
        <HorizontalStatsContainer>
            {towerStatNodes}
        </HorizontalStatsContainer>
    </div>
}

type ModuleContainerProps = { module: any, category: Category }

async function ModuleContainer({module, category}: ModuleContainerProps) {
    const moduleProperties = module.stats
    const moduleStatNodes = moduleProperties.map(
        (prop: { property_name: string; value: string; }) =>
            <SimpleNameValue name={prop.property_name} value={prop.value}
                             key={`${module.stats.name} ${prop.property_name}`} />)

    console.log(module)

    return <div className={`p-3 pt-2 rounded-2xl border-2 border-solid border-${category}-light`}>
        <h4 className={"mb-1 text-black"}>
            <span className={"italic font-bold"}>{module.name}</span> <span>attack</span>
        </h4>
        <HorizontalStatsContainer>
            {moduleStatNodes}
        </HorizontalStatsContainer>
    </div>
}

async function ModulesFragment({stats, category}: TowerStatsModuleContainerProps) {
    const moduleArray = stats.tower_modules
    const moduleNodes = moduleArray.map(
        (module: any) =>
            <ModuleContainer module={module} category={category}
                             key={`${module.name} module`} />)

    return <>{moduleNodes}</>
}

type StatsTowerPageProps = { params: { internal_name: string } }

export default async function StatsTowerPage({params}: StatsTowerPageProps) {
    const {internal_name} = await params;

    let displayName: string = "Unknown Tower";
    let category: Category = "other";
    let stats;
    try {
        const res = await fetch(`http://localhost:3000/api/popology/tower_info/${internal_name}`);
        const data = await res.json();
        displayName = data.display_name;
        category = data.category;

        const resStats = await fetch(`http://localhost:3000/api/popology/tower_stats/${internal_name}?path1=0&path2=0&path3=0`);
        stats = await resStats.json();
    } catch (error) {
        console.error(error);
    }

    console.log(stats)

    return <div className="flex flex-col gap-4">
        <StatsTowerPageHeader displayName={displayName} category={category}/>
        <TowerStatsModuleContainer stats={stats} category={category}/>
        <ModulesFragment stats={stats} category={category}/>
    </div>
}