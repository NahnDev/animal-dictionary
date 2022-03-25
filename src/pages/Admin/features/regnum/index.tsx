import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import regnumApi from '../../../../api/regnumApi'
import { openNotificationWithIcon } from '../../../../functions/global'
import { ScienceInfo } from '../../../../types/ScienceInfo'
import RegnumAddEdit from './pages/addEdit'
import RegnumMain from './pages/main'

function RegnumPage() {
    const [valueAction, setValueAction] = useState<{ type: string; value: ScienceInfo }>()
    const [regnum, setRegnum] = useState<Array<ScienceInfo>>([])

    const nav = useNavigate()

    const getAllRegnum = async () => {
        try {
            const response = await regnumApi.getRegnum()
            setRegnum(response)
        } catch (error: any) {
            console.log(error)
        }
    }

    const postRegnum = async (value: ScienceInfo) => {
        try {
            const response = await regnumApi.postRegnum(value)
            if (response) {
                getAllRegnum()
                openNotificationWithIcon('success', 'Add regnum successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const patchRegnum = async (_id: string, value: ScienceInfo) => {
        try {
            const response = await regnumApi.patchRegnum(_id, value)
            if (response) {
                getAllRegnum()
                openNotificationWithIcon('success', 'Edit regnum successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const deleteRegnum = async (_id: string) => {
        try {
            const response = await regnumApi.deleteRegnum(_id)
            if (response) {
                getAllRegnum()
                openNotificationWithIcon('success', 'Delete regnum successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const handleAction = (value: { type: string; value: ScienceInfo }) => {
        switch (value.type) {
            case 'add':
                nav(`/admin/regnum/add`)
                break
            case 'edit':
                nav(`/admin/regnum/${value.value._id}`)
                break
            case 'delete':
                deleteRegnum(value.value._id || '')
                break
            default:
                break
        }
        setValueAction(value)
    }

    const handleSubmit = (value: ScienceInfo) => {
        switch (valueAction?.type) {
            case 'add':
                postRegnum(value)
                break
            case 'edit':
                patchRegnum(valueAction.value?._id || '', value)
                break
            default:
                break
        }
        nav(`/admin/regnum`)
    }

    useEffect(() => {
        getAllRegnum()
    }, [])

    return (
        <Routes>
            <Route
                path={'*'}
                element={<RegnumMain handleAction={handleAction} dataSource={regnum} />}
            />
            <Route path={'/add'} element={<RegnumAddEdit handleSubmit={handleSubmit} />} />
            <Route
                path={'/:id'}
                element={<RegnumAddEdit handleSubmit={handleSubmit} data={valueAction?.value} />}
            />
        </Routes>
    )
}

export default RegnumPage
