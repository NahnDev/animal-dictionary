import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { NavItems } from "../constants/navigate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby, faBrain, faUser } from "@fortawesome/free-solid-svg-icons";

export default function AppFooter() {
    return (
        <footer className="AppFooter flex items-start justify-between p-5">
            <Link to="/" className={clsx(["Logo", "text-left"])}>
                <h1 className="text-2xl p-2 font-bold">Animals</h1>
                <p>Information Animal</p>
            </Link>
            <div className="flex flex-row gap-24 px-10">
                <div className=" flex flex-col items-start">
                    {NavItems.map((prop, index) => (
                        <Link
                            {...prop}
                            key={index}
                            className={"text-xl p-3"}
                        ></Link>
                    ))}
                </div>
                <div className="flex flex-col items-start">
                    <h4 className="text-xl p-3">Contact us</h4>
                    <ul className="pl-2">
                        <li className="text-xl p-3">animal@gmail.com</li>
                        <li className="text-xl p-3">(+84) 900000000000</li>
                    </ul>
                    <div className="flex flex-row justify-between p-3">
                        <FontAwesomeIcon
                            className="text-xl p-3"
                            icon={faUser}
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                            className="text-xl p-3"
                            icon={faUser}
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                            className="text-xl p-3"
                            icon={faUser}
                        ></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </footer>
    );
}
