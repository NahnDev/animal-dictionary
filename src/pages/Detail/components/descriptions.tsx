import { Col, Row } from 'antd'
import React from 'react'

type IProps = {
    className: string
    data: any
}

function DescriptionsAnimal(props: IProps) {
    const { className, data } = props

    return (
        <Row className={`${className}`}>
            <Col xs={24}>
                <span className={`${className}--label`}>{`Mô tả:`}</span>

                <span className={`${className}--text`}>{`Sinh cảnh: ${data.sinhcanh}`}</span>
                <span className={`${className}--text`}>{`Địa điểm thu mẫu: ${data.diadiem}`}</span>
                <span className={`${className}--text`}>{`${data.hinhthai}`}</span>
                <span className={`${className}--text`}>{`Sinh thái: ${data.sinhthai}`}</span>
            </Col>
        </Row>
    )
}

export default DescriptionsAnimal
