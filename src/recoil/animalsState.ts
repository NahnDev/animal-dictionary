import { atom } from 'recoil'
import { Animal } from '../types/Animal'

export const animalsState = atom<Array<Animal>>({
    key: 'animals',
    default: [],
})
