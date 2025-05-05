"use client"

import Image from "next/image";
import {useEffect} from "react";

type StatsTowerCardProps = {
    category: string;
    displayName: string;
    internalName: string;
};

function StatsTowerCard({ category, displayName, internalName }: StatsTowerCardProps) {
    function getBackgroundColorClass() {
        let backgroundColor: string = "bg-primary-light";
        switch (category) {
            case "Primary": backgroundColor = "bg-primary-light"; break;
            case "Military": backgroundColor = "bg-military-light"; break;
        }
        return backgroundColor;
    }

    return <button className={
        `flex flex-col justify-center items-start gap-0 relative
        rounded-lg p-1.5 ${getBackgroundColorClass()}`}>
        <p className="monosp">{category}</p>
        <p className="text-lg leading-[1.25rem] ">{displayName}</p>
        <div className="absolute right-0 w-full h-full flex justify-end items-center mr-4">
            <div className="h-full aspect-square flex items-center justify-center relative">
                <Image src={`/towerPortraits/${internalName}/base.png`} alt={`${displayName} icon`} fill
                       className="object-contain scale-125 icon-shadow" />
            </div>
        </div>
    </button>
}

function StatsTowerPageHeader() {
    return <div className="bg-gray-200 p-3 rounded-2xl">
        <h1 className="underline decoration-primary decoration-solid">Dart Monkey</h1>
        <p className="monosp text-sm">Primary</p>
    </div>
}

function StatsTowerPage() {
    return <div>
        <StatsTowerPageHeader />
    </div>
}

function StatsPageLayout() {
    return <div className="grid grid-cols-[16rem_1fr] gap-4">
        <div className="flex flex-col gap-4">
            <StatsTowerCard category="Primary" displayName="Dart Monkey"
                            internalName="dartMonkey"/>
            <StatsTowerCard category="Primary" displayName="Boomerang Monkey"
                            internalName="boomerangMonkey"/>
            <StatsTowerCard category="Primary" displayName="Bomb Shooter"
                            internalName="bombShooter"/>
            <StatsTowerCard category="Primary" displayName="Tack Shooter"
                            internalName="tackShooter"/>
            <StatsTowerCard category="Primary" displayName="Ice Monkey"
                            internalName="iceMonkey"/>
            <StatsTowerCard category="Primary" displayName="Glue Gunner"
                            internalName="glueGunner"/>
            <StatsTowerCard category="Military" displayName="Sniper Monkey"
                            internalName="sniperMonkey"/>
            <StatsTowerCard category="Military" displayName="Monkey Sub"
                            internalName="monkeySub"/>
        </div>
        <StatsTowerPage />
    </div>
}

export default function StatsPage() {
    useEffect(() => {
        fetch('/api/popology/tower_info/dartMonkey', {})
            .then((res) => res.json())
            .then((json) => console.log(json))
        fetch('/api/popology/tower_info/boomerangMonkey', {})
            .then((res) => res.json())
            .then((json) => console.log(json));
    }, []);

    return <main>
        <StatsPageLayout />
    </main>
}