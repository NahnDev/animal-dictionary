import { Coordinate } from "./Coordinate";
import { AnimalCls, Familia, Ordo, Phylum, Regnum } from "./ScienceInfo";

export type Animal = {
    _id: string;
    name: string;
    nameplate: string;
    scienceName: string;
    regnum: Regnum;
    phylum: Phylum;
    animalCls: AnimalCls;
    ordo: Ordo;
    familia: Familia;
    images: [string];
    coordinate: Coordinate[];

    morphological: string;
    ecological: string;
    value: string;
    IUCN: string;
    VRB: string;
    Decree: string;
    CITES: string;
    distribution: string;
    specimen: string;
    habitat: string;
    place: string;
    collBy: string;
    collAt: number;
    createBy: string;
    createAt: number;
};
