import { Col, Row } from 'antd'
import { FastField, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { classFeature } from '../../../../../constants/className'
import { CONTENT_ADMIN } from '../../../../../constants/content'
import ButtonField from '../../../../../custom-fields/BtnSubmit'
import InputField from '../../../../../custom-fields/InputField'
import SelectField from '../../../../../custom-fields/SelectField'
import { User } from '../../../../../types/User'

type IProps = {
    handleSubmit: Function
    initialValues: User
    isAddMode: boolean
}
const className = classFeature.admin
const content = CONTENT_ADMIN.userPages

function FormAddEdit(props: IProps) {
    const { handleSubmit, initialValues, isAddMode } = props

    let validationSchema = Yup.object().shape({})
    if (isAddMode) {
        validationSchema = Yup.object().shape({
            name: Yup.string().required('This field is required.'),
            username: Yup.string().required('This field is required.'),
            password: Yup.string().required('This field is required.'),
            role: Yup.string().required('This field is required.'),
        })
    } else {
        validationSchema = Yup.object().shape({
            name: Yup.string().required('This field is required.'),
            role: Yup.string().required('This field is required.'),
        })
    }

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
                                    <Col xs={12}>
                                        <FastField
                                            component={InputField}
                                            name={'name'}
                                            type={'text'}
                                            className={`${className}__form--field`}
                                            label={'Name'}
                                        />
                                    </Col>
                                    <Col xs={12}>
                                        <FastField
                                            component={SelectField}
                                            name={'role'}
                                            type={'text'}
                                            className={`${className}__form--field`}
                                            label={'Role'}
                                            options={content.roles}
                                        />
                                    </Col>
                                </Row>
                                {isAddMode && (
                                    <Row>
                                        <Col xs={12}>
                                            <FastField
                                                component={InputField}
                                                name={'username'}
                                                type={'text'}
                                                className={`${className}__form--field`}
                                                label={'Username'}
                                                disabled={initialValues.username}
                                            />
                                        </Col>

                                        <Col xs={12}>
                                            <FastField
                                                component={InputField}
                                                name={'password'}
                                                type={'password'}
                                                className={`${className}__form--field`}
                                                label={'Password'}
                                            />
                                        </Col>
                                    </Row>
                                )}

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
