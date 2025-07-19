import {useContext} from "react";
import {CategoryContext, SetPathContext} from "@/app/definitions";
import {useSearchParams} from "next/navigation";

type UpgradeButtonPosition = "start" | "middle" | "end"

function UpgradeButton(
    {path, value, upgradeButtonPosition}:
    { path: number, value: string | number, upgradeButtonPosition: UpgradeButtonPosition }
) {
    const setPath = useContext(SetPathContext);

    return <button className={`rounded-none
        ${upgradeButtonPosition === "start" ? "rounded-l-md" : ""}
        ${upgradeButtonPosition === "end" ? "rounded-r-md" : ""}
        `} onClick={() => setPath(path, Number(value))}>
        <p>{value}</p>
    </button>
}

function PathRow({path, numberOfUpgrades}: { path: number, numberOfUpgrades: number }) {
    return <div className="flex">
        {
            Array.from({length: numberOfUpgrades + 1}).map((_, i) => {
                let upgradeButtonPosition: UpgradeButtonPosition = "middle"
                if (i === 0) upgradeButtonPosition = "start"
                if (i === numberOfUpgrades) upgradeButtonPosition = "end"
                return <UpgradeButton key={i} path={path} value={i} upgradeButtonPosition={upgradeButtonPosition}/>
            })
        }
    </div>
}

export default function TowerPathDisplay({paths}: { paths: number[] }) {
    return <div className="flex flex-col gap-1.5">
        {
            paths.map((numberOfUpgrades, path) => (
                <PathRow key={path} path={path} numberOfUpgrades={numberOfUpgrades}/>
            ))
        }
    </div>
}