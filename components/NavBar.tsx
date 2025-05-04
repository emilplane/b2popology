import React from "react";

type NavLinkProps = {
    text: string;
    url: string;
};

function NavLink({ text, url }: NavLinkProps) {
    return <a href={url}>
        <p className="text-lg cursor-pointer">{text}</p>
    </a>
}

export default function NavBar() {
    return <div className="flex items-center justify-center bg-white h-16 sticky top-0">
        <div className="w-full max-w-7xl grid grid-cols-[auto_1fr]">
            <div>
                <a href="/">
                    <h1 className="text-brand-dark">Battles 2 Popology</h1>
                </a>
            </div>
            <div className="flex items-center gap-6 ml-auto">
                <NavLink text="Stats" url="/stats"></NavLink>
                <NavLink text="Eco Simulator" url="/ecosim"></NavLink>
                <NavLink text="Discord" url="https://discord.com/invite/9YAaxDXAYZ"></NavLink>
            </div>
        </div>
    </div>
}