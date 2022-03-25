import { FormLoginUser, User } from '../types/User'
import axiosClient from './axiosClient'

const userApi = {
    postUser: (data: User) => {
        const url = '/user'
        return axiosClient.post(url, data)
    },

    getUser: () => {
        const url = `/user`
        return axiosClient.get<any, Array<User>>(url)
    },

    getUserDetail: (_id: string) => {
        const url = `/user/${_id}`
        return axiosClient.get<any, User>(url)
    },

    patchUser: (_id: string, data: User) => {
        const url = `/user/${_id}`
        return axiosClient.patch(url, data)
    },

    deleteUser: (_id: string) => {
        const url = `/user/${_id}`
        return axiosClient.delete(url)
    },

    postLogin: (data: FormLoginUser) => {
        const url = '/auth'
        return axiosClient.post<any, { accessToken: string; user: User }>(url, data)
    },
}
export default userApi
