import { Coordinate } from './Coordinate'
import { AnimalCls, Familia, Ordo, Phylum, Regnum } from './ScienceInfo'

export type Animal = {
    _id?: string
    name: string
    nameplate: string
    scienceName: string //
    regnum: Regnum | string
    phylum: Phylum | string
    animalCls: AnimalCls | string
    ordo: Ordo | string
    familia: Familia | string
    images: Array<string>
    coordinate: Coordinate[]

    morphological: string
    ecological: string
    value: string
    IUCN: string
    VRB: string
    Decree: string
    CITES: string
    distribution: string
    specimen: string
    habitat: string
    place: string
    collBy: string
    collAt: number | moment.Moment
    createBy?: string
    createAt?: number
}
