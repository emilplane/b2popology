import {ReactNode} from "react";

type HorizontalStatsContainerProps = {
    children: ReactNode[];
}

export default function HorizontalStatsContainer({ children }: HorizontalStatsContainerProps) {
    return <div className="flex flex-row flex-wrap gap-6">
        {children}
    </div>
}