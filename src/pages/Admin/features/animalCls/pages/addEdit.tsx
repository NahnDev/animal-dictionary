import { Col, Row } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import { classFeature } from '../../../../../constants/className'
import { CONTENT_ADMIN } from '../../../../../constants/content'
import { ScienceInfo } from '../../../../../types/ScienceInfo'
import FormAddEdit from '../components/formAddEdit'

type IProps = {
    data?: ScienceInfo
    handleSubmit: Function
}

const content = CONTENT_ADMIN.animalClass
const className = classFeature.admin

function AnimalClassAddEdit(props: IProps) {
    const { data, handleSubmit } = props
    const params = useParams()

    const isAddMode = !params.id

    const initialValues = {
        name: data?.name || '',
    }

    return (
        <Row justify="center">
            <Col xs={16}>
                <Row align="middle" className={`${className}__head`}>
                    <Col>
                        <span className={`${className}__head--title`}>
                            {isAddMode ? content.textAdd : content.textEdit}
                        </span>
                    </Col>
                </Row>
                <FormAddEdit handleSubmit={handleSubmit} initialValues={initialValues} />
            </Col>
        </Row>
    )
}

export default AnimalClassAddEdit
