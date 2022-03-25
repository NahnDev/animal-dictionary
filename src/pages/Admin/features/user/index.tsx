import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import userApi from '../../../../api/userApi'
import { openNotificationWithIcon } from '../../../../functions/global'
import { User } from '../../../../types/User'
import UserAddEdit from './pages/addEdit'
import UserMain from './pages/main'

function UserPage() {
    const [valueAction, setValueAction] = useState<{ type: string; value: User }>()
    const [users, setUsers] = useState<Array<User>>([])

    const nav = useNavigate()

    const getUsers = async () => {
        try {
            const response = await userApi.getUser()
            setUsers(response)
        } catch (error: any) {
            console.log(error)
        }
    }

    const postUser = async (value: User) => {
        try {
            const response = await userApi.postUser(value)
            if (response) {
                getUsers()
                openNotificationWithIcon('success', 'Add user successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const patchUser = async (_id: string, value: User) => {
        try {
            const response = await userApi.patchUser(_id, value)
            if (response) {
                getUsers()
                openNotificationWithIcon('success', 'Edit user successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const deleteUser = async (_id: string) => {
        try {
            const response = await userApi.deleteUser(_id)
            if (response) {
                getUsers()
                openNotificationWithIcon('success', 'Delete user successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const handleAction = (value: { type: string; value: User }) => {
        switch (value.type) {
            case 'add':
                nav(`/admin/user/add`)
                break
            case 'edit':
                nav(`/admin/user/${value.value._id}`)
                break
            case 'delete':
                deleteUser(value.value._id || '')
                break
            default:
                break
        }
        setValueAction(value)
    }

    const handleSubmit = (value: User) => {
        switch (valueAction?.type) {
            case 'add':
                postUser(value)
                break
            case 'edit':
                let data: User = {
                    name: value.name,
                    role: value.role,
                }
                patchUser(valueAction.value?._id || '', data)
                break

            default:
                break
        }
        nav(`/admin/user`)
    }

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <Routes>
            <Route
                path={'*'}
                element={<UserMain handleAction={handleAction} dataSource={users} />}
            />
            <Route path={'/add'} element={<UserAddEdit handleSubmit={handleSubmit} />} />
            <Route
                path={'/:id'}
                element={<UserAddEdit handleSubmit={handleSubmit} user={valueAction?.value} />}
            />
        </Routes>
    )
}

export default UserPage
