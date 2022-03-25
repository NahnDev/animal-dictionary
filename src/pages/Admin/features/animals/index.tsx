import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AnimalsAddEdit from './pages/addEdit'
import AnimalsMain from './pages/main'

function AnimalsPage() {
    return (
        <Routes>
            <Route path={'*'} element={<AnimalsMain />} />
            <Route path={'/add'} element={<AnimalsAddEdit />} />
            <Route path={'/:id'} element={<AnimalsAddEdit />} />
        </Routes>
    )
}

export default AnimalsPage
