import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import animalClsApi from '../../../../api/animalClsApi'
import { openNotificationWithIcon } from '../../../../functions/global'
import { ScienceInfo } from '../../../../types/ScienceInfo'
import AnimalClassAddEdit from './pages/addEdit'
import AnimalClassMain from './pages/main'

function AnimalClassPage() {
    const [valueAction, setValueAction] = useState<{ type: string; value: ScienceInfo }>()
    const [animalClass, setAnimalClass] = useState<Array<ScienceInfo>>([])

    const nav = useNavigate()

    const getAllAnimalClass = async () => {
        try {
            const response = await animalClsApi.getAnimalCls()
            setAnimalClass(response)
        } catch (error: any) {
            console.log(error)
        }
    }

    const postAnimalClass = async (value: ScienceInfo) => {
        try {
            const response = await animalClsApi.postAnimalCls(value)
            if (response) {
                getAllAnimalClass()
                openNotificationWithIcon('success', 'Add animal class successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const patchAnimalClass = async (_id: string, value: ScienceInfo) => {
        try {
            const response = await animalClsApi.patchAnimalCls(_id, value)
            if (response) {
                getAllAnimalClass()
                openNotificationWithIcon('success', 'Edit animal class successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const deleteAnimalClass = async (_id: string) => {
        try {
            const response = await animalClsApi.deleteAnimalCls(_id)
            if (response) {
                getAllAnimalClass()
                openNotificationWithIcon('success', 'Delete user successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const handleAction = (value: { type: string; value: ScienceInfo }) => {
        switch (value.type) {
            case 'add':
                nav(`/admin/animal-class/add`)
                break
            case 'edit':
                nav(`/admin/animal-class/${value.value._id}`)
                break
            case 'delete':
                deleteAnimalClass(value.value._id || '')
                break
            default:
                break
        }
        setValueAction(value)
    }

    const handleSubmit = (value: ScienceInfo) => {
        switch (valueAction?.type) {
            case 'add':
                postAnimalClass(value)
                break
            case 'edit':
                patchAnimalClass(valueAction.value?._id || '', value)
                break
            default:
                break
        }
        nav(`/admin/animal-class`)
    }

    useEffect(() => {
        getAllAnimalClass()
    }, [])
    return (
        <Routes>
            <Route
                path={'*'}
                element={<AnimalClassMain handleAction={handleAction} dataSource={animalClass} />}
            />
            <Route path={'/add'} element={<AnimalClassAddEdit handleSubmit={handleSubmit} />} />
            <Route
                path={'/:id'}
                element={
                    <AnimalClassAddEdit handleSubmit={handleSubmit} data={valueAction?.value} />
                }
            />
        </Routes>
    )
}

export default AnimalClassPage
