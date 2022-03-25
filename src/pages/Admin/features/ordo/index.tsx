import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OrdoAddEdit from './pages/addEdit'
import OrdoMain from './pages/main'

function OrdoPage() {
    return (
        <Routes>
            <Route path={'*'} element={<OrdoMain />} />
            <Route path={'/add'} element={<OrdoAddEdit />} />
            <Route path={'/:id'} element={<OrdoAddEdit />} />
        </Routes>
    )
}

export default OrdoPage
