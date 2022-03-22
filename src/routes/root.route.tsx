import { RouteProps } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

export const ROOT_ROUTE: RouteProps[] = [
    {
        path: "/",
        element: <div>Home</div>,
    },
    {
        path: "/login",
        element: <LoginPage></LoginPage>,
    },
    {
        path: "/animals",
        element: <div>Animal</div>,
    },
];
