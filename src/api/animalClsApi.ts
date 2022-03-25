import { AnimalCls } from '../types/ScienceInfo'
import axiosClient from './axiosClient'

const animalClsApi = {
    postAnimalCls: (data: AnimalCls) => {
        const url = '/animal-cls'
        return axiosClient.post(url, data)
    },

    getAnimalCls: () => {
        const url = `/animal-cls`
        return axiosClient.get<any, Array<AnimalCls>>(url)
    },

    getAnimalClsDetail: (_id: string) => {
        const url = `/animal-cls/${_id}`
        return axiosClient.get<any, AnimalCls>(url)
    },

    patchAnimalCls: (_id: string, data: AnimalCls) => {
        const url = `/animal-cls/${_id}`
        return axiosClient.patch(url, data)
    },

    deleteAnimalCls: (_id: string) => {
        const url = `/animal-cls/${_id}`
        return axiosClient.delete(url)
    },
}
export default animalClsApi
