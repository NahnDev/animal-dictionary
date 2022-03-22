import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROOT_ROUTE } from "./routes/root.route";
import AppHeader from "./layouts/AppHeader";
import AppFooter from "./layouts/AppFooter";

function App() {
    return (
        <div className="App mx-auto">
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <AppHeader></AppHeader>
                    <Routes>
                        {ROOT_ROUTE.map((prop, index) => (
                            <Route key={index} {...prop}></Route>
                        ))}
                    </Routes>
                    <AppFooter></AppFooter>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
