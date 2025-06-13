import {ReactNode} from "react";

type StatsTowerPageHeaderProps = { name: string, value: string }

export default function SimpleNameValue({name, value}: StatsTowerPageHeaderProps) {
    return <div>
        <h4 className={"leading-5"}>{value ?? "unknown"}</h4>
        <p className={"monosp leading-4 text-gray-900 font-normal"}>{name ?? "unknown_property"}</p>
    </div>
}