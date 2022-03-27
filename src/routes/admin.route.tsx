import { RouteProps } from 'react-router-dom'
import AnimalClassPage from '../pages/Admin/features/animalCls'
import AnimalsPage from '../pages/Admin/features/animals'
import FamiliaPage from '../pages/Admin/features/familia'
import OrdoPage from '../pages/Admin/features/ordo'
import PhylumPage from '../pages/Admin/features/phylum'
import RegnumPage from '../pages/Admin/features/regnum'
import UserPage from '../pages/Admin/features/user'

export const ADMIN_ROUTE: Array<{
    roles: Array<'ADMIN' | 'EDITOR' | 'VIEWER'>
    router: RouteProps
}> = [
    {
        roles: ['ADMIN', 'EDITOR'],
        router: {
            path: '/animals/*',
            element: <AnimalsPage />,
        },
    },
    {
        roles: ['ADMIN', 'EDITOR'],
        router: {
            path: '/animal-class/*',
            element: <AnimalClassPage />,
        },
    },
    {
        roles: ['ADMIN', 'EDITOR'],
        router: {
            path: '/familia/*',
            element: <FamiliaPage />,
        },
    },
    {
        roles: ['ADMIN', 'EDITOR'],
        router: {
            path: '/ordo/*',
            element: <OrdoPage />,
        },
    },
    {
        roles: ['ADMIN', 'EDITOR'],
        router: {
            path: '/phylum/*',
            element: <PhylumPage />,
        },
    },
    {
        roles: ['ADMIN', 'EDITOR'],
        router: {
            path: '/regnum/*',
            element: <RegnumPage />,
        },
    },
    {
        roles: ['ADMIN'],
        router: {
            path: '/user/*',
            element: <UserPage />,
        },
    },
]
