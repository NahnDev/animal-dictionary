import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import familiaApi from '../../../../api/familiaApi'
import { openNotificationWithIcon } from '../../../../functions/global'
import { ScienceInfo } from '../../../../types/ScienceInfo'
import FamiliaAddEdit from './pages/addEdit'
import FamiliaMain from './pages/main'

function FamiliaPage() {
    const [valueAction, setValueAction] = useState<{ type: string; value: ScienceInfo }>()
    const [familia, setFamilia] = useState<Array<ScienceInfo>>([])

    const nav = useNavigate()

    const getAllFamilia = async () => {
        try {
            const response = await familiaApi.getFamilia()
            setFamilia(response)
        } catch (error: any) {
            console.log(error)
        }
    }

    const postFamilia = async (value: ScienceInfo) => {
        try {
            const response = await familiaApi.postFamilia(value)
            if (response) {
                getAllFamilia()
                openNotificationWithIcon('success', 'Add familia successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const patchFamilia = async (_id: string, value: ScienceInfo) => {
        try {
            const response = await familiaApi.patchFamilia(_id, value)
            if (response) {
                getAllFamilia()
                openNotificationWithIcon('success', 'Edit familia successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const deleteFamilia = async (_id: string) => {
        try {
            const response = await familiaApi.deleteFamilia(_id)
            if (response) {
                getAllFamilia()
                openNotificationWithIcon('success', 'Delete familia successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const handleAction = (value: { type: string; value: ScienceInfo }) => {
        switch (value.type) {
            case 'add':
                nav(`/admin/familia/add`)
                break
            case 'edit':
                nav(`/admin/familia/${value.value._id}`)
                break
            case 'delete':
                deleteFamilia(value.value._id || '')
                break
            default:
                break
        }
        setValueAction(value)
    }

    const handleSubmit = (value: ScienceInfo) => {
        switch (valueAction?.type) {
            case 'add':
                postFamilia(value)
                break
            case 'edit':
                patchFamilia(valueAction.value?._id || '', value)
                break
            default:
                break
        }
        nav(`/admin/familia`)
    }

    useEffect(() => {
        getAllFamilia()
    }, [])
    return (
        <Routes>
            <Route
                path={'*'}
                element={<FamiliaMain handleAction={handleAction} dataSource={familia} />}
            />
            <Route path={'/add'} element={<FamiliaAddEdit handleSubmit={handleSubmit} />} />
            <Route
                path={'/:id'}
                element={<FamiliaAddEdit handleSubmit={handleSubmit} data={valueAction?.value} />}
            />
        </Routes>
    )
}

export default FamiliaPage
