import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { currentAnimalState } from '../recoil/currentAnimalState'
import { Animal } from '../types/Animal'

type IProps = {
    className: string
    animal: Animal
}

function CardAnimal(props: IProps) {
    const { className, animal } = props
    const setCurrenAnimal = useSetRecoilState(currentAnimalState)

    return (
        <Col className={`${className}`}>
            <Row justify="center">
                <img className={`${className}-img`} src={animal.images[0]} alt={animal.name} />
            </Row>
            <Row justify="center">
                <span className={`${className}-title`}>{animal.name}</span>
            </Row>
            <Row justify="center">
                <span className={`${className}-name`}>{animal.scienceName}</span>
            </Row>
            <Row justify="center">
                <span className={`${className}-desc`}>{animal.ecological}</span>
            </Row>
            <Row justify="center">
                <Link
                    to={`/animals/${animal._id}`}
                    onClick={() => {
                        window.scrollTo(0, 0)
                        setCurrenAnimal(animal)
                    }}
                    className={`${className}-btn`}
                >
                    learn more
                </Link>
            </Row>
        </Col>
    )
}

export default CardAnimal
