import { Col, Row } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import { classFeature } from '../../../../../constants/className'
import { CONTENT_ADMIN } from '../../../../../constants/content'
import { Animal } from '../../../../../types/Animal'
import { ScienceInfo } from '../../../../../types/ScienceInfo'
import FormAddEdit from '../components/formAddEdit'

type IProps = {
    data?: Animal
    handleSubmit: Function
    listCategory: {
        animalClass: Array<ScienceInfo>
        familia: Array<ScienceInfo>
        ordo: Array<ScienceInfo>
        phylum: Array<ScienceInfo>
        regnum: Array<ScienceInfo>
    }
}

const content = CONTENT_ADMIN.animals
const className = classFeature.admin

function AnimalsAddEdit(props: IProps) {
    const { data, handleSubmit, listCategory } = props
    const params = useParams()

    const isAddMode = !params.id

    const initialValues = {
        name: '',
        nameplate: '',
        scienceName: '',
        regnum: '',
        phylum: '',
        animalCls: '',
        ordo: '',
        familia: '',
        images: [],
        coordinate: [],
        morphological: '',
        ecological: '',
        value: '',
        IUCN: '',
        VRB: '',
        Decree: '',
        CITES: '',
        distribution: '',
        specimen: '',
        habitat: '',
        place: '',
        collBy: '',
        collAt: 0,
    }

    return (
        <Row justify="center">
            <Col xs={24}>
                <Row align="middle" className={`${className}__head`}>
                    <Col>
                        <span className={`${className}__head--title`}>
                            {isAddMode ? content.textAdd : content.textEdit}
                        </span>
                    </Col>
                </Row>
                <FormAddEdit
                    listCategory={listCategory}
                    handleSubmit={handleSubmit}
                    initialValues={data || initialValues}
                />
            </Col>
        </Row>
    )
}

export default AnimalsAddEdit
