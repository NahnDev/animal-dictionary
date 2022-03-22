import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

export default function Logo(props: { className?: string }) {
    return (
        <Link to="/" className={clsx(["Logo", props.className, "p-2 mx-10"])}>
            <h1 className="text-3xl font-extrabold">Animals</h1>
        </Link>
    );
}
