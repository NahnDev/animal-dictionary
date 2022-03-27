import { Col, Row } from 'antd'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import animalsApi from '../../api/animalsApi'
import { classFeature } from '../../constants/className'
import { CONTENT_ANIMALS } from '../../constants/content'
import { openNotificationWithIcon } from '../../functions/global'
import { animalsState } from '../../recoil/animalsState'
import { searchState } from '../../recoil/searchState'
import { Animal } from '../../types/Animal'
import './animals.scss'
import Filter from './components/filter'
import ListAnimal from './components/listAnimal'

const className = classFeature.animals
const content = CONTENT_ANIMALS

function Animals() {
    const [animals, setAnimals] = useRecoilState(animalsState)
    const [search, setSearch] = useRecoilState(searchState)

    const getAnimal = async () => {
        try {
            const params = {}
            const response = await animalsApi.getAnimal(params)
            setAnimals(response)
        } catch (error: any) {
            console.log(error)
        }
    }

    const handleFilter = (value: string, type: 'search' | 'familia' | 'ordo' | 'class') => {
        let dataSearch: Array<Animal> = []
        let filter: { search: string; familia: string; ordo: string; animalCls: string } = {
            search: '',
            familia: '',
            ordo: '',
            animalCls: '',
        }

        switch (type) {
            case 'familia':
                animals.length &&
                    animals.map((val) => {
                        if (typeof val.familia !== 'string' && val.familia._id === value)
                            return dataSearch.push(val)
                        return true
                    })
                dataSearch?.length === 0 &&
                    openNotificationWithIcon('warning', 'No matching animals!!!', '')

                filter.familia = value
                break
            case 'ordo':
                animals.length &&
                    animals.map((val) => {
                        if (typeof val.ordo !== 'string' && val.ordo._id === value)
                            return dataSearch.push(val)
                        return true
                    })
                dataSearch?.length === 0 &&
                    openNotificationWithIcon('warning', 'No matching animals!!!', '')

                filter.ordo = value
                break
            case 'class':
                animals.length &&
                    animals.map((val) => {
                        if (typeof val.animalCls !== 'string' && val.animalCls._id === value)
                            return dataSearch.push(val)
                        return true
                    })
                dataSearch?.length === 0 &&
                    openNotificationWithIcon('warning', 'No matching animals!!!', '')

                filter.animalCls = value
                break
            default:
                animals.length &&
                    animals.map((val) => {
                        if (
                            val.name.indexOf(value) !== -1 ||
                            val.nameplate.indexOf(value) !== -1 ||
                            val.scienceName.indexOf(value) !== -1
                        )
                            return dataSearch.push(val)
                        return true
                    })

                filter.search = value
                break
        }
        setSearch({ filter: filter, dataFilter: dataSearch })
    }

    useEffect(() => {
        window.scrollTo(0, 0)

        if (animals.length === 0) {
            getAnimal()
        }

        if (search.filter?.search && search.dataFilter?.length === 0) {
            openNotificationWithIcon('warning', "Can't find animal!!!", '')
        }
    }, [search])

    return (
        <Row className={`${className}`}>
            <Col xs={24}>
                <Filter
                    className={`${className}__filter`}
                    title={content.title}
                    desc={content.desc}
                    contentSearch={content.search}
                    contentFilter={content.filter}
                    handleFilter={handleFilter}
                />
                <ListAnimal
                    className={`${className}__list`}
                    data={
                        search.dataFilter && search.dataFilter.length > 0
                            ? search.dataFilter
                            : animals
                    }
                />
            </Col>
        </Row>
    )
}

export default Animals
