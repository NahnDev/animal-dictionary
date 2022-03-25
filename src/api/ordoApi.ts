import { Ordo } from '../types/ScienceInfo'
import axiosClient from './axiosClient'

const ordoApi = {
    postOrdo: (data: Ordo) => {
        const url = '/ordo'
        return axiosClient.post(url, data)
    },

    getOrdo: () => {
        const url = `/ordo`
        return axiosClient.get<any, Array<Ordo>>(url)
    },

    getOrdoDetail: (_id: string) => {
        const url = `/ordo/${_id}`
        return axiosClient.get<any, Ordo>(url)
    },

    patchOrdo: (_id: string, data: Ordo) => {
        const url = `/ordo/${_id}`
        return axiosClient.patch(url, data)
    },

    deleteOrdo: (_id: string) => {
        const url = `/ordo/${_id}`
        return axiosClient.delete(url)
    },
}
export default ordoApi
