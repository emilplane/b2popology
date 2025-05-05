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
    return <div className="flex items-center justify-center bg-white h-16 sticky top-0 z-20">
        <div className="w-full max-w-screen-2xl px-4 grid grid-cols-[auto_1fr]">
            <div>
                <a href="/">
                    <p className="luckiest-guy text-brand-dark">Battles 2 Popology</p>
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