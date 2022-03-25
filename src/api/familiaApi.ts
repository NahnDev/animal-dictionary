import { Familia } from '../types/ScienceInfo'
import axiosClient from './axiosClient'

const familiaApi = {
    postFamilia: (data: Familia) => {
        const url = '/familia'
        return axiosClient.post(url, data)
    },

    getFamilia: () => {
        const url = `/familia`
        return axiosClient.get<any, Array<Familia>>(url)
    },

    getFamiliaDetail: (_id: string) => {
        const url = `/familia/${_id}`
        return axiosClient.get<any, Familia>(url)
    },

    patchFamilia: (_id: string, data: Familia) => {
        const url = `/familia/${_id}`
        return axiosClient.patch(url, data)
    },

    deleteFamilia: (_id: string) => {
        const url = `/familia/${_id}`
        return axiosClient.delete(url)
    },
}
export default familiaApi
