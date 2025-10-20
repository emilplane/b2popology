import Image from "next/image";
import React, {useContext} from "react";
import {TowerDataContext, TowerInfoContext} from "@/app/definitions";

export function StatsPageHeader() {
    const towerInfo = useContext(TowerInfoContext);
    const towerData = useContext(TowerDataContext);

    const resolvedName: ResolvedNames = resolveUpgradeNames(towerInfo.upgrade_names, towerData.path, towerInfo.display_name);
    const secondaryNamesText = secondaryNamesToHTMLData(resolvedName.secondaryNames);
    const includeSecondaryNamesSpace = secondaryNamesText.length === 0 ? "" : " ";


    return <div
        className="bg-white dark:bg-zinc-800 h-64 w-svw drop-shadow-xl/20 flex items-center justify-center px-8">
        <div
            className="absolute bottom-0 left-[max(20px,calc((100vw-80rem)/2))] right-0 overflow-hidden whitespace-nowrap">
            <h1 className="text-[12rem] text-zinc-300 dark:text-zinc-700 opacity-20">
                {resolvedName.mainName}{includeSecondaryNamesSpace}
                <span className="text-[6rem]">{secondaryNamesText}</span>
            </h1>
        </div>
        <div className="w-full max-w-300 h-full grid grid-cols-[300px_1fr]">
            <div className="h-full flex items-start justify-center pt-4 z-0">
                <Image src="/towerPortraits/monkey_sub/middlePath/img.png" alt="Tower Portrait" width="300"
                    height="300" priority={false}/>
            </div>
            <div className="h-full w-full flex items-start justify-start z-0">
                <div className="h-max w-full mt-12 flex flex-col items-start justify-start gap-2">
                    <div>
                        <h1 className="mb-1">
                            <span
                                className="text-5xl underline decoration-[var(--color-military)] decoration-4 underline-offset-4">
                                {resolvedName.mainName}
                            </span>
                            {includeSecondaryNamesSpace}
                            <span className="text-2xl">{secondaryNamesText}</span>
                        </h1>
                        <h4>{towerData.path.join("")} {towerInfo.display_name}</h4>
                    </div>
                    <div>
                        {/*  Navigation tools  */}
                    </div>
                </div>
            </div>
        </div>

    </div>
}

type ResolvedNames = { mainName: string; secondaryNames: string[] };

/**
 * Resolve names for a set of path upgrades.
 *
 * @param upgradeNames - nested array of known names, indexed by path (0...N-1), each inner array is 1-based tiers
 * @param pathLevels - array of integers (tiers) for each path, e.g. [3,1,2]
 * @param baseName - prefix used for generated placeholders (default "Dart Monkey")
 */
function resolveUpgradeNames(
    upgradeNames: string[][],
    pathLevels: number[],
    baseName = 'Dart Monkey'
): ResolvedNames {
    if (pathLevels.every((lvl) => lvl === 0)) return {
        mainName: baseName, secondaryNames: []
    };

    const numPaths = pathLevels.length;

    // Helper to create placeholder when a name is missing
    const makePlaceholder = (pathIndex: number, tier: number) => {
        const segments = new Array(numPaths).fill('x');
        segments[pathIndex] = String(tier);
        return `${baseName} ${segments.join('-')}`;
    };

    // Helper to get the name (either known or generated)
    const getName = (pathIndex: number, tier: number) => {
        const namesForPath = upgradeNames[pathIndex] ?? [];
        // tiers are 1-based in the names arrays
        if (tier >= 1 && tier <= namesForPath.length && namesForPath[tier - 1]) {
            return namesForPath[tier - 1];
        }
        return makePlaceholder(pathIndex, tier);
    };

    // Find main index: the path with the largest tier, tie -> earlier index
    let mainIndex = -1;
    let maxTier = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < numPaths; i++) {
        const lvl = pathLevels[i] ?? 0;
        if (lvl > maxTier || (lvl === maxTier && (mainIndex === -1 || i < mainIndex))) {
            mainIndex = i;
            maxTier = lvl;
        }
    }

    if (maxTier <= 0) return {
        mainName: baseName, secondaryNames: []
    }; // Safety check

    const mainName = getName(mainIndex, maxTier);

    // Build secondary array: other non-zero paths sorted by tier desc, tie -> earlier index
    const secondaries = pathLevels
        .map((lvl, idx) => ({idx, lvl}))
        .filter((p) => p.lvl > 0 && p.idx !== mainIndex)
        .sort((a, b) => {
            if (b.lvl !== a.lvl) return b.lvl - a.lvl; // larger tier first
            return a.idx - b.idx; // earlier index first on tie
        })
        .map((p) => getName(p.idx, p.lvl));

    return {mainName, secondaryNames: secondaries};
}

function secondaryNamesToHTMLData(secondaryNames: string[]): string {
    if (secondaryNames.length < 1) {
        return ""
    }

    return "w/" + secondaryNames.join(", ");
}