import { RouteProps } from 'react-router-dom'
import AnimalClassPage from '../pages/Admin/features/animalCls'
import AnimalsPage from '../pages/Admin/features/animals'
import FamiliaPage from '../pages/Admin/features/familia'
import ImportPage from '../pages/Admin/features/import'
import OrdoPage from '../pages/Admin/features/ordo'
import PhylumPage from '../pages/Admin/features/phylum'
import RegnumPage from '../pages/Admin/features/regnum'
import UserPage from '../pages/Admin/features/user'

export const ADMIN_ROUTE: RouteProps[] = [
    {
        path: '/animals/*',
        element: <AnimalsPage />,
    },
    {
        path: '/animal-class/*',
        element: <AnimalClassPage />,
    },
    {
        path: '/familia/*',
        element: <FamiliaPage />,
    },
    {
        path: '/ordo/*',
        element: <OrdoPage />,
    },
    {
        path: '/phylum/*',
        element: <PhylumPage />,
    },
    {
        path: '/regnum/*',
        element: <RegnumPage />,
    },
    {
        path: '/user/*',
        element: <UserPage />,
    },
    {
        path: '/import/*',
        element: <ImportPage></ImportPage>
    }
]
