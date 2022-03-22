import React from "react";
import { Link, LinkProps } from "react-router-dom";
import Logo from "../components/Logo";
import { NavItems } from "../constants/navigate";

export default function AppHeader() {
    return (
        <header className="AppHeader flex items-end justify-between p-6">
            <Logo></Logo>
            <div className="flex justify-around gap-20 items-end">
                {NavItems.map((prop, index) => (
                    <Link
                        {...prop}
                        key={index}
                        className={"text-xl p-3"}
                    ></Link>
                ))}
            </div>
        </header>
    );
}
