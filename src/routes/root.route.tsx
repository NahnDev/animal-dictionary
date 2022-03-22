import { RouteProps } from "react-router-dom";

export const ROOT_ROUTE: RouteProps[] = [
    {
        path: "/",
        element: <div>Home</div>,
    },
    {
        path: "/animals",
        element: <div>Animal</div>,
    },
];
