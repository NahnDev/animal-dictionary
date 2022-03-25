import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AnimalClassAddEdit from './pages/addEdit'
import AnimalClassMain from './pages/main'

function AnimalClassPage() {
    return (
        <Routes>
            <Route path={'*'} element={<AnimalClassMain />} />
            <Route path={'/add'} element={<AnimalClassAddEdit />} />
            <Route path={'/:id'} element={<AnimalClassAddEdit />} />
        </Routes>
    )
}

export default AnimalClassPage
