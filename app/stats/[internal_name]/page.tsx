import React from "react";

interface StatsTowerPageHeaderProps {
    internal_name: string
}

async function StatsTowerPageHeader({internal_name}: StatsTowerPageHeaderProps) {
    const res= await fetch('http://localhost:3000/api/popology/tower_info/dart_monkey');
    const data= await res.json();

    return <div className="bg-gray-200 p-3 rounded-2xl">
        <h1 className="underline decoration-primary decoration-solid">{data?.display_name}</h1>
        <p className="monosp text-sm">tower_category</p>
    </div>
}

type Props = { params: { internal_name: string } }

export default async function StatsTowerPage({params}: Props) {
    const {internal_name} = await params

    return <div>
        <StatsTowerPageHeader internal_name={internal_name}/>
    </div>
}