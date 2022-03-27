import { atom } from 'recoil'
import { Animal } from '../types/Animal'

const initialValue: Animal = {
    _id: '',
    name: '',
    nameplate: '',
    scienceName: '',
    regnum: '',
    phylum: '',
    animalCls: '',
    ordo: '',
    familia: '',
    images: [],
    coordinate: [],

    morphological: '',
    ecological: '',
    value: '',
    IUCN: '',
    VRB: '',
    Decree: '',
    CITES: '',
    distribution: '',
    specimen: '',
    habitat: '',
    place: '',
    collBy: '',
    collAt: 0,
}

export const currentAnimalState = atom({
    key: 'currentAnimal',
    default: {
        ...initialValue,
    },
})
