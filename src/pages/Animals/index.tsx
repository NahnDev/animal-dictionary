import { Col, Row } from 'antd'
import Filter from './components/filter'
import ListAnimal from './components/listAnimal'

import { classFeature } from '../../constants/className'
import { CONTENT_ANIMALS } from '../../constants/content'

import './animals.scss'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { animalsState } from '../../recoil/animalsState'
import animalsApi from '../../api/animalsApi'

type IProps = {}

const className = classFeature.animals
const content = CONTENT_ANIMALS

function Animals(props: IProps) {
    const [animals, setAnimals] = useRecoilState(animalsState)

    const handleFilter = (value: any) => {
        console.log(value)
    }

    const getAnimal = async () => {
        try {
            const params = {}
            const response = await animalsApi.getAnimal(params)
            setAnimals(response)
        } catch (error: any) {
            console.log(error)
        }
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
                <Filter
                    handleFilter={handleFilter}
                    className={`${className}__filter`}
                    title={content.title}
                    desc={content.desc}
                    contentSearch={content.search}
                    contentFilter={content.filter}
                />
                <ListAnimal className={`${className}__list`} data={animals} />
            </Col>
        </Row>
    )
}

export default Animals
