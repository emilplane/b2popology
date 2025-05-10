import React from "react";

interface StatsTowerPageHeaderProps {
    internal_name: string
}

async function StatsTowerPageHeader({internal_name}: StatsTowerPageHeaderProps) {
    let displayName = "Unknown Tower";
    let category = "tower_category";
    try {
        const res = await fetch(`http://localhost:3000/api/popology/tower_info/${internal_name}`);
        const data = await res.json();
        displayName = data.display_name;

        const resStats = await fetch(`http://localhost:3000/api/popology/tower_stats/${internal_name}?path1=0&path2=0&path3=0`);
        const stats = await resStats.json();
        console.log(stats);
    } catch (error) {
        console.error(error);
    }
    return <div className="bg-gray-200 p-3 rounded-2xl">
        <h1 className="underline decoration-primary decoration-solid">{displayName}</h1>
        <p className="monosp text-sm">{category}</p>
    </div>
}

type Props = { params: { internal_name: string } }

export default async function StatsTowerPage({params}: Props) {
    const {internal_name} = await params;

    return <div>
        <StatsTowerPageHeader internal_name={internal_name}/>
    </div>
}