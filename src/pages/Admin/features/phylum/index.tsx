import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PhylumAddEdit from './pages/addEdit'
import PhylumMain from './pages/main'

function PhylumPage() {
    return (
        <Routes>
            <Route path={'*'} element={<PhylumMain />} />
            <Route path={'/add'} element={<PhylumAddEdit />} />
            <Route path={'/:id'} element={<PhylumAddEdit />} />
        </Routes>
    )
}

export default PhylumPage
