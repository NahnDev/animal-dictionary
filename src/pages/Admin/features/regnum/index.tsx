import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegnumAddEdit from './pages/addEdit'
import RegnumMain from './pages/main'

function RegnumPage() {
    return (
        <Routes>
            <Route path={'*'} element={<RegnumMain />} />
            <Route path={'/add'} element={<RegnumAddEdit />} />
            <Route path={'/:id'} element={<RegnumAddEdit />} />
        </Routes>
    )
}

export default RegnumPage
