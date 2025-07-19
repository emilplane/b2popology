import React from "react";
import {Category} from "@/app/definitions";
import StatsTowerClientPage from "@/app/stats/[internal_name]/pageClient";

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
        console.log(stats);
    } catch (error) {
        console.error(error);
    }

    return <StatsTowerClientPage internalName={internal_name} displayName={displayName} category={category} initialStats={stats} />
}