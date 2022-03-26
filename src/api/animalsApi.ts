import { Animal } from '../types/Animal'
import axiosClient from './axiosClient'

const animalsApi = {
    postAnimal: (data: Animal) => {
        const url = '/animal'
        return axiosClient.post(url, data)
    },

    getAnimal: () => {
        const url = `/animal`
        return axiosClient.get<any, Array<Animal>>(url)
    },

    getAnimalDetail: (_id: string) => {
        const url = `/animal/${_id}`
        return axiosClient.get<any, Animal>(url)
    },

    patchAnimal: (_id: string, data: Animal) => {
        const url = `/animal/${_id}`
        return axiosClient.patch(url, data)
    },

    deleteAnimal: (_id: string) => {
        const url = `/animal/${_id}`
        return axiosClient.delete(url)
    },
}
export default animalsApi
