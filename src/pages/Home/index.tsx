import { Col, Row } from 'antd'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import animalsApi from '../../api/animalsApi'
import { classFeature } from '../../constants/className'
import { CONTENT_HOME } from '../../constants/content'
import { animalsState } from '../../recoil/animalsState'
import { searchState } from '../../recoil/searchState'
import { Animal } from '../../types/Animal'
import { Search } from '../../types/Search'
import HowItWork from './components/howitwork'
import Landing from './components/landing'
import ListAnimal from './components/listAnimals'
import './home.scss'

const className = classFeature.home
const content = CONTENT_HOME

function Home() {
    const [animals, setAnimals] = useRecoilState<Array<Animal>>(animalsState)
    const setSearch = useSetRecoilState<Search>(searchState)

    const nav = useNavigate()

    const getAnimal = async (params?: any) => {
        try {
            const response = await animalsApi.getAnimal(params || {})
            setAnimals(response)
        } catch (error: any) {
            console.log(error)
        }
    }

    const onSearch = (valueSearch: string) => {
        let dataSearch: Array<Animal> = []

        animals.length &&
            animals.map((value) => {
                if (value.name.indexOf(valueSearch) !== -1) return dataSearch.push(value)
                return true
            })
        setSearch({ filter: { search: valueSearch }, dataFilter: dataSearch })
        nav('/animals')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        if (animals.length === 0) {
            getAnimal()
        }
    }, [])

    return (
        <Row className={`${className}`}>
            <Col xs={24}>
                <Landing
                    content={content.landing}
                    className={`${className}__landing`}
                    listAnimal={animals}
                    onSearch={onSearch}
                />
                <HowItWork className={`${className}__howitwork`} content={content.howitwork} />
                <ListAnimal
                    className={`${className}__list`}
                    listAnimal={animals}
                    content={content.listAnimal}
                />
            </Col>
        </Row>
    )
}

export default Home
