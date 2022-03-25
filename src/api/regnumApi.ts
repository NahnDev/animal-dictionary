import { Regnum } from '../types/ScienceInfo'
import axiosClient from './axiosClient'

const regnumApi = {
    postRegnum: (data: Regnum) => {
        const url = '/Regnum'
        return axiosClient.post(url, data)
    },

    getRegnum: () => {
        const url = `/Regnum`
        return axiosClient.get<any, Array<Regnum>>(url)
    },

    getRegnumDetail: (_id: string) => {
        const url = `/Regnum/${_id}`
        return axiosClient.get<any, Regnum>(url)
    },

    patchRegnum: (_id: string, data: Regnum) => {
        const url = `/Regnum/${_id}`
        return axiosClient.patch(url, data)
    },

    deleteRegnum: (_id: string) => {
        const url = `/Regnum/${_id}`
        return axiosClient.delete(url)
    },
}
export default regnumApi
