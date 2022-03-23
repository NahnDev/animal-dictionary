import { RouteProps } from 'react-router-dom'
import LoginPage from '../pages/Login'
import HomePage from '../pages/Home'
import AnimalsPage from '../pages/Animals'
import AnimalsDetailPage from '../pages/Detail'

export const ROOT_ROUTE: RouteProps[] = [
    {
        path: '/home',
        element: <HomePage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/animals',
        element: <AnimalsPage />,
    },
    {
        path: '/animals/:id',
        element: <AnimalsDetailPage />,
    },
]
