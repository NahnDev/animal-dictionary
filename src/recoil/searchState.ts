import { atom } from 'recoil'
import { Search } from '../types/Search'

export const searchState = atom<Search>({
    key: 'search',
    default: {},
})
