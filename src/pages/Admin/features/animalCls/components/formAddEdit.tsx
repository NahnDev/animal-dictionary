import { Col, Row } from 'antd'
import { FastField, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { classFeature } from '../../../../../constants/className'
import ButtonField from '../../../../../custom-fields/BtnSubmit'
import InputField from '../../../../../custom-fields/InputField'
import { ScienceInfo } from '../../../../../types/ScienceInfo'

type IProps = {
    handleSubmit: Function
    initialValues: ScienceInfo
}
const className = classFeature.admin

function FormAddEdit(props: IProps) {
    const { handleSubmit, initialValues } = props

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('This field is required.'),
    })

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
                                <FastField
                                    component={InputField}
                                    name={'name'}
                                    type={'text'}
                                    className={`${className}__form--field`}
                                    label={'Name'}
                                />
                                <ButtonField
                                    content={'CONFIRM'}
                                    type="submit"
                                    className={`${className}__form--btn`}
                                />
                            </Form>
                        )
                    }}
                </Formik>
            </Col>
        </Row>
    )
}

export default FormAddEdit
