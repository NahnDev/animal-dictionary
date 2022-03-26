import { Col, Row } from 'antd'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import animalsApi from '../../api/animalsApi'
import { classFeature } from '../../constants/className'
import { CONTENT_HOME } from '../../constants/content'
import { animalsState } from '../../recoil/animalsState'
import { Animal } from '../../types/Animal'
import HowItWork from './components/howitwork'
import Landing from './components/landing'
import ListAnimal from './components/listAnimals'

import './home.scss'

const className = classFeature.home
const content = CONTENT_HOME

function Home() {
    const [animals, setAnimals] = useRecoilState<Array<Animal>>(animalsState)

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
                <Landing
                    content={content.landing}
                    className={`${className}__landing`}
                    listAnimal={animals}
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
