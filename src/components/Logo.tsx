import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

export default function Logo(props: { className?: string }) {
    return (
        <Link
            to="/"
            className={clsx([
                "Logo",
                props.className,
                "text-2xl p-2 font-bold",
            ])}
        >
            <h1 className="">Animals</h1>
        </Link>
    );
}
