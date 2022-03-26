import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import animalClsApi from '../../../../api/animalClsApi'
import animalsApi from '../../../../api/animalsApi'
import familiaApi from '../../../../api/familiaApi'
import ordoApi from '../../../../api/ordoApi'
import phylumApi from '../../../../api/phylumApi'
import regnumApi from '../../../../api/regnumApi'
import { openNotificationWithIcon } from '../../../../functions/global'
import { Animal } from '../../../../types/Animal'
import { ScienceInfo } from '../../../../types/ScienceInfo'
import AnimalsAddEdit from './pages/addEdit'
import AnimalsMain from './pages/main'

function AnimalsPage() {
    const [valueAction, setValueAction] = useState<{ type: string; value: Animal }>()
    const [listCategory, setListCategory] = useState<{
        animalClass: Array<ScienceInfo>
        familia: Array<ScienceInfo>
        ordo: Array<ScienceInfo>
        phylum: Array<ScienceInfo>
        regnum: Array<ScienceInfo>
    }>({ animalClass: [], familia: [], ordo: [], phylum: [], regnum: [] })

    const [animals, setAnimals] = useState<Array<Animal>>([])

    const nav = useNavigate()

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

    const getAllAnimal = async () => {
        try {
            const response = await animalsApi.getAnimal()
            setAnimals(response)
        } catch (error: any) {
            console.log(error)
        }
    }

    const postAnimal = async (value: Animal) => {
        try {
            const response = await animalsApi.postAnimal(value)
            if (response) {
                getAllAnimal()
                openNotificationWithIcon('success', 'Add animal successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const patchAnimal = async (_id: string, value: Animal) => {
        try {
            const response = await animalsApi.patchAnimal(_id, value)
            if (response) {
                getAllAnimal()
                openNotificationWithIcon('success', 'Edit animal successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const deleteAnimal = async (_id: string) => {
        try {
            const response = await animalsApi.deleteAnimal(_id)
            if (response) {
                getAllAnimal()
                openNotificationWithIcon('success', 'Delete animal class successfully', '')
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const handleAction = (value: { type: string; value: Animal }) => {
        switch (value.type) {
            case 'add':
                nav(`/admin/animals/add`)
                break
            case 'edit':
                if (typeof value.value.regnum !== 'string') {
                    value.value.regnum = value.value.regnum._id || ''
                }
                if (typeof value.value.phylum !== 'string') {
                    value.value.phylum = value.value.phylum._id || ''
                }
                if (typeof value.value.animalCls !== 'string') {
                    value.value.animalCls = value.value.animalCls._id || ''
                }
                if (typeof value.value.ordo !== 'string') {
                    value.value.ordo = value.value.ordo._id || ''
                }
                if (typeof value.value.familia !== 'string') {
                    value.value.familia = value.value.familia._id || ''
                }
                nav(`/admin/animals/${value.value._id}`)
                break
            case 'delete':
                deleteAnimal(value.value._id || '')
                break
            default:
                break
        }
        setValueAction(value)
    }

    const handleSubmit = (value: Animal) => {
        switch (valueAction?.type) {
            case 'add':
                value.collAt = Number(moment(value.collAt).utc().format('x'))
                postAnimal(value)
                break
            case 'edit':
                if (typeof value.regnum !== 'string') {
                    value.regnum = value.regnum._id || ''
                }
                if (typeof value.phylum !== 'string') {
                    value.phylum = value.phylum._id || ''
                }
                if (typeof value.animalCls !== 'string') {
                    value.animalCls = value.animalCls._id || ''
                }
                if (typeof value.ordo !== 'string') {
                    value.ordo = value.ordo._id || ''
                }
                if (typeof value.familia !== 'string') {
                    value.familia = value.familia._id || ''
                }
                value.collAt = Number(moment(value.collAt).utc().format('x'))
                patchAnimal(valueAction.value?._id || '', value)
                break
            default:
                break
        }
        nav(`/admin/animals`)
    }

    useEffect(() => {
        getAllAnimal()
        getAllListCategory()
    }, [])

    return (
        <Routes>
            <Route
                path={'*'}
                element={<AnimalsMain handleAction={handleAction} dataSource={animals} />}
            />
            <Route
                path={'/add'}
                element={<AnimalsAddEdit listCategory={listCategory} handleSubmit={handleSubmit} />}
            />
            <Route
                path={'/:id'}
                element={
                    <AnimalsAddEdit
                        listCategory={listCategory}
                        handleSubmit={handleSubmit}
                        data={valueAction?.value}
                    />
                }
            />
        </Routes>
    )
}

export default AnimalsPage
