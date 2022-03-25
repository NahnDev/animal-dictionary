import { Phylum } from '../types/ScienceInfo'
import axiosClient from './axiosClient'

const phylumApi = {
    postPhylum: (data: Phylum) => {
        const url = '/phylum'
        return axiosClient.post(url, data)
    },

    getPhylum: () => {
        const url = `/phylum`
        return axiosClient.get<any, Array<Phylum>>(url)
    },

    getPhylumDetail: (_id: string) => {
        const url = `/phylum/${_id}`
        return axiosClient.get<any, Phylum>(url)
    },

    patchPhylum: (_id: string, data: Phylum) => {
        const url = `/phylum/${_id}`
        return axiosClient.patch(url, data)
    },

    deletePhylum: (_id: string) => {
        const url = `/phylum/${_id}`
        return axiosClient.delete(url)
    },
}
export default phylumApi
