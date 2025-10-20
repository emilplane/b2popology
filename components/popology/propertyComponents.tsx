import React from "react";
import {popologyConfig} from "@/config/popologyConfig";
import {propertyNameConversion} from "@/lib/propertyNameConversion";
import {Property} from "@/types/popology";

interface StandardPropertyComponentProps {
    name: string
    value: any
}

export function StandardPropertyComponent({name, value}: StandardPropertyComponentProps) {
    return <div
        className="bg-zinc-200 dark:bg-zinc-900 p-1.5 px-2 rounded-lg">
        <h3 className="-mb-1">{value}</h3>
        <p>{name}</p>
    </div>
}

export function MinimalPropertyComponent({name, value}: StandardPropertyComponentProps) {
    return <div
        className="bg-zinc-200 dark:bg-zinc-900 p-1.5 pt-1 rounded-lg
        flex items-center justify-center self-center">
        <p className="-mb-1">{name}: {value}</p>
    </div>
}

interface DamagePropertiesComponentProps {
    damagePropertyData: Property[]
    damageBonusPropertyData: Property[]
}

export function DamagePropertiesComponent({
    damagePropertyData,
    damageBonusPropertyData
}: DamagePropertiesComponentProps) {
    const damageProperties: React.ReactElement[] = [];
    const damageBonusProperties: React.ReactElement[] = [];

    damagePropertyData.forEach(property => {
        const key = `Property_${property.property_name}`

    })

    return <div
        className="bg-zinc-200 dark:bg-zinc-900 p-1.5 px-2 rounded-lg">
        <div>
            <h3 className="-mb-1">value</h3>
            <p>name</p>
        </div>
    </div>
}