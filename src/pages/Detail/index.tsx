import { Col, Row } from 'antd'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import animalsApi from '../../api/animalsApi'
import { classFeature } from '../../constants/className'
import { CONTENT_DETAIL } from '../../constants/content'
import { animalsState } from '../../recoil/animalsState'
import { currentAnimalState } from '../../recoil/currentAnimalState'
import { searchState } from '../../recoil/searchState'
import { Search } from '../../types/Search'
import DescriptionsAnimal from './components/descriptions'
import DetailAnimal from './components/detail'
import Images from './components/images'
import ListAnimal from './components/listAnimals'
import './detail.scss'

const className = classFeature.animalDetail
const content = CONTENT_DETAIL

function Detail() {
    const params = useParams()
    const [currentAnimal, setCurrenAnimal] = useRecoilState(currentAnimalState)
    const [animals, setAnimals] = useRecoilState(animalsState)
    const setSearch = useSetRecoilState<Search>(searchState)

    const getAnimalDetail = async (_id: string) => {
        try {
            const response = await animalsApi.getAnimalDetail(_id)
            setCurrenAnimal(response)
        } catch (error: any) {
            console.log(error)
        }
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
        if (!currentAnimal._id && params.id) {
            getAnimalDetail(params.id)
        }

        if (animals.length === 0) {
            getAnimal()
        }
        setSearch({})
    }, [])

    return (
        <Row className={`${className}`}>
            <Col xs={24}>
                {currentAnimal._id && (
                    <>
                        <Row align="middle">
                            <Col xs={14}>
                                <Images
                                    className={`${className}__images`}
                                    listImage={currentAnimal.images}
                                />
                            </Col>
                            <Col xs={10}>
                                <DetailAnimal
                                    className={`${className}__detail-animal`}
                                    data={currentAnimal}
                                />
                            </Col>
                        </Row>
                        <DescriptionsAnimal
                            className={`${className}__desc-animal`}
                            data={currentAnimal}
                        />
                    </>
                )}

                <ListAnimal
                    className={`${className}__list`}
                    listAnimal={animals}
                    content={content.listAnimal}
                />
            </Col>
        </Row>
    )
}

export default Detail
