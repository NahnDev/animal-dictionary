import { Col, Row } from 'antd'
import React from 'react'

type IProps = {
    className: string
    data: any
}

function DetailAnimal(props: IProps) {
    const { className, data } = props

    return (
        <Row className={`${className}`}>
            <Col xs={24}>
                <span className={`${className}--title`}>{data.tenKH}</span>
                <span className={`${className}--label`}>{`${data.tenTV} - ${data.tenDP}`}</span>
                <span className={`${className}--text r-1`}>{`Giới: ${data.gioi}`}</span>
                <span className={`${className}--text r-1`}>{`Ngành: ${data.nganh}`}</span>
                <span className={`${className}--text r-1`}>{`Lớp: ${data.lop}`}</span>
                <span className={`${className}--text r-1`}>{`Bộ: ${data.bo}`}</span>
                <span className={`${className}--text r-1`}>{`Họ: ${data.ho}`}</span>
                <span className={`${className}--label`}>{`Bảo tồn`}</span>
                <span className={`${className}--text r-1`}>{`Giá trị sử dụng: ${data.ho}`}</span>
                <span className={`${className}--text r-1`}>{`Theo IUCN: ${data.ho}`}</span>
                <span className={`${className}--text r-1`}>{`Sách đỏ Việt Nam: ${data.ho}`}</span>
                <span
                    className={`${className}--text r-2`}
                >{`Theo Nghị định 32/2006/NĐCP: ${data.ho}`}</span>
                <span
                    className={`${className}--text r-2`}
                >{`Theo CITES (40/2013/TT-BNNPTNT): ${data.ho}`}</span>
            </Col>
        </Row>
    )
}

export default DetailAnimal
