import { RouteProps } from 'react-router-dom'
import LoginPage from '../pages/Login'
import HomePage from '../pages/Home'
import AnimalsPage from '../pages/Animals'
import AnimalsDetailPage from '../pages/Detail'
import AboutUsPage from '../pages/AboutUs'

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
    { path: '/about', element: <AboutUsPage></AboutUsPage> },
]
