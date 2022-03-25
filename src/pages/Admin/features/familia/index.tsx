import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FamiliaAddEdit from './pages/addEdit'
import FamiliaMain from './pages/main'

function FamiliaPage() {
    return (
        <Routes>
            <Route path={'*'} element={<FamiliaMain />} />
            <Route path={'/add'} element={<FamiliaAddEdit />} />
            <Route path={'/:id'} element={<FamiliaAddEdit />} />
        </Routes>
    )
}

export default FamiliaPage
