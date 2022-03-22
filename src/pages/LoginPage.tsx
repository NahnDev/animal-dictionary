import React from "react";

export default function LoginPage() {
    return (
        <div
            className="LoginPage flex justify-center h-screen"
            style={{ height: "80vh" }}
        >
            <div className="h-full w-full">
                <img src="./login-bg.jpg" alt="" className="h-full m-auto" />
            </div>
            <div className="flex flex-col items-start text-left  justify-center w-3/6 mr-40">
                <div className="my-5">
                    <h1 className="text-5xl font-bold p-1 px-4">Login</h1>
                    <p>Log in with your account to the website.</p>
                </div>
                <label className="w-full flex flex-col">
                    <h4 className=" font-normal">Username</h4>
                    <input
                        type="text"
                        placeholder="Enter username"
                        className="p-1 my-2 rounded-2xl px-2 border-2 focus:border-2 focus:border-slate-500 border-slate-500 focus:outline-none"
                    />
                </label>
                <label className="w-full flex flex-col">
                    <h4 className=" font-normal">Password</h4>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="p-1 my-2 rounded-2xl px-2 border-2 focus:border-2 focus:border-slate-500 border-slate-500 focus:outline-none"
                    />
                </label>
                <button className="p-1 my-8 uppercase w-full rounded-full bg-green-300 hover:transition-transform duration-500 hover:ring-2 ring-green-300 ring-offset-1">
                    Login
                </button>
            </div>
        </div>
    );
}
