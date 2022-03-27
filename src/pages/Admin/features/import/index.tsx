import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { boolean } from 'yup/lib/locale'
import animalClsApi from '../../../../api/animalClsApi'
import animalsApi from '../../../../api/animalsApi'
import familiaApi from '../../../../api/familiaApi'
import ordoApi from '../../../../api/ordoApi'
import phylumApi from '../../../../api/phylumApi'
import regnumApi from '../../../../api/regnumApi'
import { openNotificationWithIcon } from '../../../../functions/global'
import { Animal } from '../../../../types/Animal'
import { Coordinate } from '../../../../types/Coordinate'
import { ScienceInfo } from '../../../../types/ScienceInfo'
import FieldTransform from './components/FieldTransform'

import './import.style.scss'
type DataImportType = Omit<Animal, 'images' | 'coordinate' | 'collAt'> & {
    collAt: string
    image1: string
    image2: string
    image3: string
    image4: string
    image5: string
    coordinate1: string
    coordinate2: string
    coordinate3: string
    coordinate4: string
    coordinate5: string
}

export default function ImportPage() {
    const [data, setData] = useState<Animal[]>([])
    const [step, setStep] = useState<number>(0)
    const [listCategory, setListCategory] = useState<{
        animalClass: Array<ScienceInfo>
        familia: Array<ScienceInfo>
        ordo: Array<ScienceInfo>
        phylum: Array<ScienceInfo>
        regnum: Array<ScienceInfo>
    }>({ animalClass: [], familia: [], ordo: [], phylum: [], regnum: [] })

    const handleUploadFile = async function (e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files || !e.target.files.item(0)) return
        const text = (await e.target.files.item(0)?.text()) || '[]'
        const importData = JSON.parse(text) as DataImportType[]

        // ------- covert to Animal type
        const data: Animal[] = []
        for (const item of importData) {
            const {
                image1,
                image2,
                image3,
                image4,
                image5,
                coordinate1,
                coordinate2,
                coordinate3,
                coordinate4,
                coordinate5,
                collAt,
                ...oInfo
            }: DataImportType = item
            const imagesArr: string[] = [image1, image2, image3, image4, image5]
            const images: string[] = []
            for (const image of imagesArr) {
                if (image)
                    images.push(
                        `https://drive.google.com/thumbnail?id=${
                            (image.match(/id=(.*)$/) || ['', image])[1]
                        }`
                    )
            }
            const coordinateStr: string[] = [
                coordinate1,
                coordinate2,
                coordinate3,
                coordinate4,
                coordinate5,
            ]
            const coordinate: Coordinate[] = []
            for (const str of coordinateStr) {
                if (str) coordinate.push({ x: str.split(',')[0], y: str.split(',')[1] })
            }
            data.push({ ...oInfo, coordinate, images, collAt: new Date(collAt).getTime() })
        }
        setData(data)
    }
    const handleImport = () => {
        setImporting(true)
        for (const animal of data) {
            animalsApi
                .postAnimal(animal)
                .then(() => {
                    openNotificationWithIcon('success', 'Đã thêm thành công 1 trường', '')
                })
                .catch(() =>
                    openNotificationWithIcon('warning', 'Lỗi thêm dữ liệu', 'Lỗi thêm dữ liệu')
                )
        }
    }
    const getAllListCategory = async () => {
        try {
            let data = { ...listCategory }
            const responseAnimalCls = await animalClsApi.getAnimalCls()
            data.animalClass = responseAnimalCls

            const responseFamilia = await familiaApi.getFamilia()
            data.familia = responseFamilia

            const responseOrdo = await ordoApi.getOrdo()
            data.ordo = responseOrdo

            const responsePhylum = await phylumApi.getPhylum()
            data.phylum = responsePhylum

            const responseRegnum = await regnumApi.getRegnum()
            data.regnum = responseRegnum

            setListCategory(data)
        } catch (error: any) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllListCategory()
    }, [])

    const [importing, setImporting] = useState<boolean>(false)

    const animalCls = [...new Set(data.map((animal) => animal.animalCls as string))]
    const phylum = [...new Set(data.map((animal) => animal.phylum as string))]
    const regnum = [...new Set(data.map((animal) => animal.regnum as string))]
    const ordo = [...new Set(data.map((animal) => animal.ordo as string))]
    const familia = [...new Set(data.map((animal) => animal.familia as string))]
    console.log(data.length)
    return (
        <div className="ImportPage">
            {data.length <= 0 ? (
                <button>
                    <label htmlFor="@import-json">Upload JSON</label>
                    <input
                        type="file"
                        accept=".json"
                        id="@import-json"
                        onChange={handleUploadFile}
                    ></input>
                </button>
            ) : (
                <div>
                    {step === 0 && (
                        <div>
                            <h2>Transform animal class</h2>
                            <FieldTransform
                                addHandle={(value) => {
                                    console.log(value)
                                    animalClsApi
                                        .postAnimalCls(value)
                                        .then(() => getAllListCategory())
                                }}
                                source={animalCls}
                                options={listCategory.animalClass}
                                onConfirm={(value) => {
                                    const content = [...data]
                                    content.map(
                                        (animal) =>
                                            (animal.animalCls = value[animal.animalCls as string])
                                    )
                                    setData(content)
                                    setStep(step + 1)
                                }}
                            ></FieldTransform>
                        </div>
                    )}

                    {step === 1 && (
                        <div>
                            <h2>Transform phylum</h2>
                            <FieldTransform
                                addHandle={(value) => {
                                    phylumApi.postPhylum(value).then(() => getAllListCategory())
                                }}
                                source={phylum}
                                options={listCategory.phylum}
                                onConfirm={(value) => {
                                    const content = [...data]
                                    content.map(
                                        (animal) => (animal.phylum = value[animal.phylum as string])
                                    )
                                    setData(content)
                                    setStep(step + 1)
                                }}
                            ></FieldTransform>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <h2>Transform familia</h2>
                            <FieldTransform
                                addHandle={(value) => {
                                    familiaApi.postFamilia(value).then(() => getAllListCategory())
                                }}
                                source={familia}
                                options={listCategory.familia}
                                onConfirm={(value) => {
                                    const content = [...data]
                                    content.map(
                                        (animal) =>
                                            (animal.familia = value[animal.familia as string])
                                    )
                                    setData(content)
                                    setStep(step + 1)
                                }}
                            ></FieldTransform>
                        </div>
                    )}

                    {step === 3 && (
                        <div>
                            <h2>Transform ordo</h2>
                            <FieldTransform
                                addHandle={(value) => {
                                    ordoApi.postOrdo(value).then(() => getAllListCategory())
                                }}
                                source={ordo}
                                options={listCategory.ordo}
                                onConfirm={(value) => {
                                    const content = [...data]
                                    content.map(
                                        (animal) => (animal.ordo = value[animal.ordo as string])
                                    )
                                    setData(content)
                                    setStep(step + 1)
                                }}
                            ></FieldTransform>
                        </div>
                    )}

                    {step === 4 && (
                        <div>
                            <h2>Transform regnum</h2>
                            <FieldTransform
                                addHandle={(value) => {
                                    regnumApi.postRegnum(value).then(() => getAllListCategory())
                                }}
                                source={regnum}
                                options={listCategory.regnum}
                                onConfirm={(value) => {
                                    const content = [...data]
                                    content.map(
                                        (animal) => (animal.regnum = value[animal.regnum as string])
                                    )
                                    setData(content)
                                    setStep(step + 1)
                                }}
                            ></FieldTransform>
                        </div>
                    )}
                    {step === 5 && (
                        <div>
                            <button disabled={importing} onClick={handleImport}>
                                Start import
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
