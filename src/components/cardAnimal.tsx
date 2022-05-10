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
        <Col className={`${className} card`}>
            <Row justify="center">
                <img className={`${className}-img`} src={animal.images[0]} alt={animal.name} />
                <img
                    className={`${className}-img`}
                    src={animal.images[1] || animal.images[0]}
                    alt={animal.name}
                />
            </Row>
            <Row justify="center">
                <span className={`${className}-title`}>{animal.name}</span>
            </Row>
            <Row justify="center">
                <span className={`${className}-name`} style={{ color: 'gray' }}>
                    {animal.scienceName}
                </span>
            </Row>
            <Row justify="center">
                <span className={`${className}-desc`} style={{ color: 'gray' }}>
                    {animal.ecological}
                </span>
            </Row>
            <Row justify="center">
                <Link
                    to={`/animals/${animal._id}`}
                    onClick={() => {
                        window.scrollTo(0, 0)
                        setCurrenAnimal(animal)
                    }}
                    className={`${className}-btn`}
                    style={{ color: 'green', opacity: 0.6 }}
                >
                    learn more
                </Link>
            </Row>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
             
                        .card img:first-child {
                            display: block;
                        }
                        .card img:nth-child(2) {
                            display: none;
                            
                        }
                        .card:hover img:first-child {
                            display: none;
                        }
                        .card:hover img:nth-child(2){
                            display: block;                        }
                    `,
                }}
            ></style>
        </Col>
    )
}

export default CardAnimal
