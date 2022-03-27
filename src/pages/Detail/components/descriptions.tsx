import { Col, Row } from 'antd'
import React from 'react'
import { Animal } from '../../../types/Animal'

type IProps = {
    className: string
    data: Animal
}

function DescriptionsAnimal(props: IProps) {
    const { className, data } = props

    return (
        <Row className={`${className}`}>
            <Col xs={24}>
                <span className={`${className}--label`}>{`Description:`}</span>

                <span className={`${className}--text`}>{`- Habitat: ${data.habitat}`}</span>
                <span className={`${className}--text`}>{`- Place: ${data.place}`}</span>
                <span className={`${className}--text`}>{`${data.morphological}`}</span>
                <span className={`${className}--text`}>{`- Ecological: ${data.ecological}`}</span>
            </Col>
        </Row>
    )
}

export default DescriptionsAnimal
