'use client';

import React, {createContext, useCallback, useEffect, useState} from "react";
import {
    Category,
    CategoryContext,
    ClientTowerData, ClientTowerInfo,
    SetPathContext,
    TowerDataContext,
    TowerInfoContext
} from "@/app/definitions";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {StatsPageHeader} from "@/components/popology/statsPageHeader";
import {StatsPageContent} from "@/components/popology/statsPageContent";

type StatsTowerClientPageProps = {
    internalName: string,
    inputTowerInfo: ClientTowerInfo,
    inputStats: ClientTowerData
}

export default function StatsTowerClientPage({
    internalName,
    inputTowerInfo,
    inputStats
}: StatsTowerClientPageProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const [stats, setStats] = useState(inputStats);

    const setPathParam = useCallback(
        (index: number, value: number) => {
            const params = new URLSearchParams(searchParams.toString());
            const updatedPath = updatePathParam(params, index, value);

            params.set("path", updatedPath.join("-"));
            router.push(`${pathname}?${params.toString()}`, {scroll: false});
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

    return <div>
        <SetPathContext.Provider value={setPathParam}>
            <TowerInfoContext.Provider value={inputTowerInfo}>
                <TowerDataContext.Provider value={stats}>
                    <StatsPageHeader/>
                    <StatsPageContent/>
                </TowerDataContext.Provider>
            </TowerInfoContext.Provider>
        </SetPathContext.Provider>
    </div>
}