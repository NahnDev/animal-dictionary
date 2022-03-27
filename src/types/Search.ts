import { Animal } from './Animal'

export type Search = {
    filter?: { search?: string; familia?: string; ordo?: string; animalCls?: string }
    dataFilter?: Array<Animal>
}

export type SearchType = {
    filter?: { search?: string; familia?: string; ordo?: string; animalCls?: string }
    dataFilter?: Array<Animal>
}
