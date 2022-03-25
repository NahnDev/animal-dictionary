import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ordoApi from '../../../../api/ordoApi'
import { openNotificationWithIcon } from '../../../../functions/global'
import { ScienceInfo } from '../../../../types/ScienceInfo'
import OrdoAddEdit from './pages/addEdit'
import OrdoMain from './pages/main'

function OrdoPage() {
    const [valueAction, setValueAction] = useState<{ type: string; value: ScienceInfo }>()
    const [Ordo, setOrdo] = useState<Array<ScienceInfo>>([])

    const nav = useNavigate()

    const getAllOrdo = async () => {
        try {
            const response = await ordoApi.getOrdo()
            setOrdo(response)
        } catch (error: any) {
            console.log(error)
        }
    }

    const postOrdo = async (value: ScienceInfo) => {
        try {
            const response = await ordoApi.postOrdo(value)
            if (response) {
                getAllOrdo()
                openNotificationWithIcon('success', 'Add ordo successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const patchOrdo = async (_id: string, value: ScienceInfo) => {
        try {
            const response = await ordoApi.patchOrdo(_id, value)
            if (response) {
                getAllOrdo()
                openNotificationWithIcon('success', 'Edit ordo successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const deleteOrdo = async (_id: string) => {
        try {
            const response = await ordoApi.deleteOrdo(_id)
            if (response) {
                getAllOrdo()
                openNotificationWithIcon('success', 'Delete ordo successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const handleAction = (value: { type: string; value: ScienceInfo }) => {
        switch (value.type) {
            case 'add':
                nav(`/admin/Ordo/add`)
                break
            case 'edit':
                nav(`/admin/Ordo/${value.value._id}`)
                break
            case 'delete':
                deleteOrdo(value.value._id || '')
                break
            default:
                break
        }
        setValueAction(value)
    }

    const handleSubmit = (value: ScienceInfo) => {
        switch (valueAction?.type) {
            case 'add':
                postOrdo(value)
                break
            case 'edit':
                patchOrdo(valueAction.value?._id || '', value)
                break
            default:
                break
        }
        nav(`/admin/Ordo`)
    }

    useEffect(() => {
        getAllOrdo()
    }, [])

    return (
        <Routes>
            <Route
                path={'*'}
                element={<OrdoMain handleAction={handleAction} dataSource={Ordo} />}
            />
            <Route path={'/add'} element={<OrdoAddEdit handleSubmit={handleSubmit} />} />
            <Route
                path={'/:id'}
                element={<OrdoAddEdit handleSubmit={handleSubmit} data={valueAction?.value} />}
            />
        </Routes>
    )
}

export default OrdoPage
