import { Col, Row } from 'antd'
import React from 'react'

type IProps = {
    className: string
    animal: any
}

function CardAnimal(props: IProps) {
    const { className, animal } = props
    return (
        <Col className={`${className}`}>
            <Row justify="center">
                <img className={`${className}-img`} src={animal.url} alt={animal.name} />
            </Row>
            <Row justify="center">
                <span className={`${className}-title`}>{animal.title}</span>
            </Row>
            <Row justify="center">
                <span className={`${className}-name`}>{animal.name}</span>
            </Row>
            <Row justify="center">
                <span className={`${className}-desc`}>{animal.desc}</span>
            </Row>
            <Row justify="center">
                <button className={`${className}-btn`}>learn more</button>
            </Row>
        </Col>
    )
}

export default CardAnimal
