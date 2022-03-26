import { Col, Row } from 'antd'
import { FastField, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { classFeature } from '../../../../../constants/className'
import AreaField from '../../../../../custom-fields/AreaField'
import ButtonField from '../../../../../custom-fields/BtnSubmit'
import DateField from '../../../../../custom-fields/DateField'
import InputField from '../../../../../custom-fields/InputField'
import SelectField from '../../../../../custom-fields/SelectField'
import { Animal } from '../../../../../types/Animal'
import { ScienceInfo } from '../../../../../types/ScienceInfo'

type IProps = {
    handleSubmit: Function
    initialValues: Animal
    listCategory: {
        animalClass: Array<ScienceInfo>
        familia: Array<ScienceInfo>
        ordo: Array<ScienceInfo>
        phylum: Array<ScienceInfo>
        regnum: Array<ScienceInfo>
    }
}
const className = classFeature.admin

const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required.'),
    nameplate: Yup.string().required('This field is required.'),
    scienceName: Yup.string().required('This field is required.'),
    regnum: Yup.string().required('This field is required.'),
    phylum: Yup.string().required('This field is required.'),
    animalCls: Yup.string().required('This field is required.'),
    ordo: Yup.string().required('This field is required.'),
    familia: Yup.string().required('This field is required.'),
    morphological: Yup.string().required('This field is required.'),
    ecological: Yup.string().required('This field is required.'),
    value: Yup.string().required('This field is required.'),
    IUCN: Yup.string().required('This field is required.'),
    VRB: Yup.string().required('This field is required.'),
    Decree: Yup.string().required('This field is required.'),
    CITES: Yup.string().required('This field is required.'),
    distribution: Yup.string().required('This field is required.'),
    specimen: Yup.string().required('This field is required.'),
    habitat: Yup.string().required('This field is required.'),
    place: Yup.string().required('This field is required.'),
    collBy: Yup.string().required('This field is required.'),
    collAt: Yup.string().required('This field is required.'),
})

function FormAddEdit(props: IProps) {
    const { handleSubmit, initialValues, listCategory } = props

    return (
        <Row justify="center" className={`${className}__form`}>
            <Col xs={24}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(value) => handleSubmit(value)}
                >
                    {(formikProps) => {
                        return (
                            <Form>
                                <Row>
                                    <Col xs={6}>
                                        <FastField
                                            component={InputField}
                                            name={'name'}
                                            type={'text'}
                                            className={`${className}__form--field`}
                                            label={'Name'}
                                        />
                                    </Col>
                                    <Col xs={6}>
                                        <FastField
                                            component={InputField}
                                            name={'nameplate'}
                                            type={'text'}
                                            className={`${className}__form--field`}
                                            label={'Name Plate'}
                                        />
                                    </Col>
                                    <Col xs={6}>
                                        <FastField
                                            component={InputField}
                                            name={'scienceName'}
                                            type={'text'}
                                            className={`${className}__form--field`}
                                            label={'Science Name'}
                                        />
                                    </Col>
                                    <Col xs={6}>
                                        <FastField
                                            component={SelectField}
                                            name={'regnum'}
                                            className={`${className}__form--field`}
                                            label={'Regnum'}
                                            options={listCategory.regnum}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6}>
                                        <FastField
                                            component={SelectField}
                                            name={'phylum'}
                                            className={`${className}__form--field`}
                                            label={'Phylum'}
                                            options={listCategory.phylum}
                                        />
                                    </Col>
                                    <Col xs={6}>
                                        <FastField
                                            component={SelectField}
                                            name={'animalCls'}
                                            className={`${className}__form--field`}
                                            label={'Animal Class'}
                                            options={listCategory.animalClass}
                                        />
                                    </Col>
                                    <Col xs={6}>
                                        <FastField
                                            component={SelectField}
                                            name={'ordo'}
                                            className={`${className}__form--field`}
                                            label={'Ordo'}
                                            options={listCategory.ordo}
                                        />
                                    </Col>
                                    <Col xs={6}>
                                        <FastField
                                            component={SelectField}
                                            name={'familia'}
                                            className={`${className}__form--field`}
                                            label={'Familia'}
                                            options={listCategory.familia}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <FastField
                                            component={AreaField}
                                            name={'morphological'}
                                            row={2}
                                            className={`${className}__form--field`}
                                            label={'Morphological'}
                                        />
                                    </Col>
                                    <Col xs={12}>
                                        <FastField
                                            component={AreaField}
                                            name={'ecological'}
                                            row={2}
                                            className={`${className}__form--field`}
                                            label={'Ecological'}
                                        />
                                    </Col>
                                    <Col xs={6}>
                                        <FastField
                                            component={InputField}
                                            name={'value'}
                                            type={'text'}
                                            className={`${className}__form--field`}
                                            label={'Value'}
                                        />
                                    </Col>
                                    <Col xs={6}>
                                        <FastField
                                            component={InputField}
                                            name={'IUCN'}
                                            type={'text'}
                                            className={`${className}__form--field`}
                                            label={'IUCN'}
                                        />
                                    </Col>
                                    <Col xs={6}>
                                        <FastField
                                            component={InputField}
                                            name={'VRB'}
                                            type={'text'}
                                            className={`${className}__form--field`}
                                            label={'VRB'}
                                        />
                                    </Col>
                                    <Col xs={6}>
                                        <FastField
                                            component={InputField}
                                            name={'Decree'}
                                            type={'text'}
                                            className={`${className}__form--field`}
                                            label={'Decree'}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6}>
                                        <FastField
                                            component={InputField}
                                            name={'CITES'}
                                            type={'text'}
                                            className={`${className}__form--field`}
                                            label={'CITES'}
                                        />
                                    </Col>
                                    <Col xs={6}>
                                        <FastField
                                            component={InputField}
                                            name={'distribution'}
                                            type={'text'}
                                            className={`${className}__form--field`}
                                            label={'Distribution'}
                                        />
                                    </Col>
                                    <Col xs={6}>
                                        <FastField
                                            component={InputField}
                                            name={'specimen'}
                                            type={'text'}
                                            className={`${className}__form--field`}
                                            label={'Specimen'}
                                        />
                                    </Col>
                                    <Col xs={6}>
                                        <FastField
                                            component={InputField}
                                            name={'habitat'}
                                            type={'text'}
                                            className={`${className}__form--field`}
                                            label={'Habitat'}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <FastField
                                            component={InputField}
                                            name={'place'}
                                            type={'text'}
                                            className={`${className}__form--field`}
                                            label={'Place'}
                                        />
                                    </Col>

                                    <Col xs={6}>
                                        <FastField
                                            component={InputField}
                                            name={'collBy'}
                                            className={`${className}__form--field`}
                                            label={'Coll By'}
                                        />
                                    </Col>
                                    <Col xs={6}>
                                        <FastField
                                            component={DateField}
                                            name={'collAt'}
                                            type={'text'}
                                            className={`${className}__form--field`}
                                            label={'Coll At'}
                                        />
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col xs={14}>
                                        <ButtonField
                                            content={'CONFIRM'}
                                            type="submit"
                                            className={`${className}__form--btn`}
                                        />
                                    </Col>
                                </Row>
                            </Form>
                        )
                    }}
                </Formik>
            </Col>
        </Row>
    )
}

export default FormAddEdit
