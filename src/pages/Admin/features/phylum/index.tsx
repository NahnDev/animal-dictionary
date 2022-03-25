import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import phylumApi from '../../../../api/phylumApi'
import { openNotificationWithIcon } from '../../../../functions/global'
import { ScienceInfo } from '../../../../types/ScienceInfo'
import PhylumAddEdit from './pages/addEdit'
import PhylumMain from './pages/main'

function PhylumPage() {
    const [valueAction, setValueAction] = useState<{ type: string; value: ScienceInfo }>()
    const [phylum, setPhylum] = useState<Array<ScienceInfo>>([])

    const nav = useNavigate()

    const getAllPhylum = async () => {
        try {
            const response = await phylumApi.getPhylum()
            setPhylum(response)
        } catch (error: any) {
            console.log(error)
        }
    }

    const postPhylum = async (value: ScienceInfo) => {
        try {
            const response = await phylumApi.postPhylum(value)
            if (response) {
                getAllPhylum()
                openNotificationWithIcon('success', 'Add phylum successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const patchPhylum = async (_id: string, value: ScienceInfo) => {
        try {
            const response = await phylumApi.patchPhylum(_id, value)
            if (response) {
                getAllPhylum()
                openNotificationWithIcon('success', 'Edit phylum successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const deletePhylum = async (_id: string) => {
        try {
            const response = await phylumApi.deletePhylum(_id)
            if (response) {
                getAllPhylum()
                openNotificationWithIcon('success', 'Delete phylum successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const handleAction = (value: { type: string; value: ScienceInfo }) => {
        switch (value.type) {
            case 'add':
                nav(`/admin/phylum/add`)
                break
            case 'edit':
                nav(`/admin/phylum/${value.value._id}`)
                break
            case 'delete':
                deletePhylum(value.value._id || '')
                break
            default:
                break
        }
        setValueAction(value)
    }

    const handleSubmit = (value: ScienceInfo) => {
        switch (valueAction?.type) {
            case 'add':
                postPhylum(value)
                break
            case 'edit':
                patchPhylum(valueAction.value?._id || '', value)
                break
            default:
                break
        }
        nav(`/admin/phylum`)
    }

    useEffect(() => {
        getAllPhylum()
    }, [])

    return (
        <Routes>
            <Route
                path={'*'}
                element={<PhylumMain handleAction={handleAction} dataSource={phylum} />}
            />
            <Route path={'/add'} element={<PhylumAddEdit handleSubmit={handleSubmit} />} />
            <Route
                path={'/:id'}
                element={<PhylumAddEdit handleSubmit={handleSubmit} data={valueAction?.value} />}
            />
        </Routes>
    )
}

export default PhylumPage
