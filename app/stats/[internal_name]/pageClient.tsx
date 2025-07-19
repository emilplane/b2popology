'use client';

import React, {useCallback, useContext, useEffect, useState} from "react";
import {Category, CategoryContext, SetPathContext} from "@/app/definitions";
import {categoryStyles} from "@/styles/towerCategoryStyles";
import SimpleNameValue from "@/components/simpleNameValue";
import HorizontalStatsContainer from "@/components/horizontalStatsContainer";
import {ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import TowerPathDisplay from "@/components/TowerPathDisplay";

export function StatsPageSection({children}: { children: React.ReactNode }) {
    const category = useContext(CategoryContext);
    return <div className={`p-3 rounded-2xl border-2 border-solid border-${category}-light`}>
        {children}
    </div>
}

export function Toolbar() {
    return <StatsPageSection>
        <TowerPathDisplay paths={[5, 5, 5]}/>
    </StatsPageSection>
}

type StatsTowerPageHeaderProps = { displayName: string }

export function StatsTowerPageHeader({displayName}: StatsTowerPageHeaderProps) {
    const category = useContext(CategoryContext);
    return <StatsPageSection>
        <h1 className={`underline ${categoryStyles[category].decoration} decoration-solid`}>
            {displayName}
        </h1>
        <p className="monosp text-sm">{category}</p>
    </StatsPageSection>
}

type TowerStatsModuleContainerProps = { stats: any }

export function TowerStatsModuleContainer({stats}: TowerStatsModuleContainerProps) {
    const towerModuleProperties = stats.tower_stats_module.stats
    const towerStatNodes = towerModuleProperties.map(
        (prop: { property_name: string; value: string; }) =>
            <SimpleNameValue name={prop.property_name} value={prop.value}
                             key={`${stats.tower_stats_module.name} ${prop.property_name}`}/>)

    return <StatsPageSection>
        <HorizontalStatsContainer>
            {towerStatNodes}
        </HorizontalStatsContainer>
    </StatsPageSection>
}

type ModuleContainerProps = { module: any }

function ModuleContainer({module}: ModuleContainerProps) {
    const moduleProperties = module.stats
    const moduleStatNodes = moduleProperties.map(
        (prop: { property_name: string; value: string; }) =>
            <SimpleNameValue name={prop.property_name} value={prop.value}
                             key={`${module.stats.name} ${prop.property_name}`}/>)

    return <StatsPageSection>
        <h4 className={"mb-1 text-black"}>
            <span className={"italic font-bold"}>{module.name}</span> <span>attack</span>
        </h4>
        <HorizontalStatsContainer>
            {moduleStatNodes}
        </HorizontalStatsContainer>
    </StatsPageSection>
}

export function ModulesFragment({stats}: TowerStatsModuleContainerProps) {
    const moduleArray = stats.tower_modules
    const moduleNodes = moduleArray.map(
        (module: any) =>
            <ModuleContainer module={module}
                             key={`${module.name} module`}/>)

    return <>{moduleNodes}</>
}

type StatsTowerClientPageProps = { internalName: string, displayName: string, category: Category, initialStats: any }

export default function StatsTowerClientPage({internalName, displayName, category, initialStats}: StatsTowerClientPageProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const [stats, setStats] = useState(initialStats);

    const setPathParam = useCallback(
        (index: number, value: number) => {
            const params = new URLSearchParams(searchParams.toString());
            const updatedPath = updatePathParam(params, index, value);

            params.set("path", updatedPath.join("-"));
            router.push(`${pathname}?${params.toString()}`, { scroll: false });
        },
        [pathname, router, searchParams]
    );

    function updatePathParam(params: URLSearchParams, index: number, value: number) {
        const path = params.get("path")
            ?.split("-")
            .map(Number)
            ?? [0, 0, 0]

        // Ignore negative index
        if (index < 0) return path;

        const updatedPath = path.slice();

        // If the amount of paths is not sufficient, make the array longer
        for (let i = updatedPath.length; i <= index; i++) {
            updatedPath[i] = 0;
        }

        updatedPath[index] = value;

        return updatedPath;
    }

    useEffect(() => {
        if (!searchParams.get("path")) {
            setPathParam(0, 0);
        }
    }, [searchParams, setPathParam]);

    useEffect(() => {
        const raw = searchParams.get("path") || "0-0-0";
        const [p1, p2, p3] = raw.split("-").map((s) => parseInt(s, 10) || 0);

        fetch(
            `/api/popology/tower_stats/${internalName}?path1=${p1}&path2=${p2}&path3=${p3}`
        )
            .then((res) => res.json())
            .then((data) => setStats(data))
            .catch((err) => console.error(err));
    }, [searchParams, internalName]);

    return <div className="flex flex-col gap-4">
        <SetPathContext.Provider value={setPathParam}>
            <CategoryContext.Provider value={category}>
                <Toolbar />
                <StatsTowerPageHeader displayName={displayName} />
                <TowerStatsModuleContainer stats={stats}/>
                <ModulesFragment stats={stats}/>
            </CategoryContext.Provider>
        </SetPathContext.Provider>
    </div>
}