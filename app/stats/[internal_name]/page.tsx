import React from "react";
import {ClientTowerData, ClientTowerInfo} from "@/app/definitions";
import StatsTowerClientPage from "@/app/stats/[internal_name]/pageClient";
import {ApiData, getBlankApiData, getPopologyTowerInfo, getPopologyTowerStats} from "@/lib/getApiData";

type StatsTowerPageProps = { params: { internal_name: string } }

export default async function StatsTowerPage({params}: StatsTowerPageProps) {
    const {internal_name} = await params;

    let stats: ClientTowerData = {
        path: [],
        tower_modules: [],
        tower_stats_module: {
            name: "tower-stats",
            module_type: "tower_stats",
            stats: []
        }
    };
    let towerInfo: ClientTowerInfo = {
        available_paths_info: [],
        category: "other",
        display_name: "",
        last_changed_version: "",
        upgrade_names: []
    };

    let towerInfoResponse: ApiData<ClientTowerInfo> = getBlankApiData();
    let towerStatsResponse: ApiData<ClientTowerData> = getBlankApiData();

    try {
        const res = await fetch(`http://localhost:3000/api/popology/tower_info/${internal_name}`);
        towerInfo = await res.json();

        towerInfoResponse = await getPopologyTowerInfo<ClientTowerInfo>(internal_name);

        towerStatsResponse = await getPopologyTowerStats<ClientTowerData>(internal_name);

        const resStats = await fetch(`http://localhost:3000/api/popology/tower_stats/${internal_name}?path1=0&path2=0&path3=0`);
        stats = await resStats.json();
    } catch (error) {
        console.error(error);
    }

    if (!towerInfoResponse.data || !towerStatsResponse.data) {
        return <p>An error occured.</p>
    }

    return <StatsTowerClientPage internalName={internal_name} inputTowerInfo={towerInfoResponse.data}
        inputStats={towerStatsResponse.data}/>
}