import { Col, Row } from 'antd'
import { FastField, Form, Formik } from 'formik'
import ButtonField from '../../../custom-fields/BtnSubmit'
import InputField from '../../../custom-fields/InputField'
import * as Yup from 'yup'

type IProps = {
    className: string
    handleSubmit: Function

    title: string
    desc: string
}

const validationSchema = Yup.object().shape({
    username: Yup.string().required('This field is required.'),
    password: Yup.string().required('This field is required.'),
})

const initialValues = {
    username: '',
    password: '',
}

function FormLogin(props: IProps) {
    const { className, handleSubmit, title, desc } = props
    return (
        <Row justify="center" className={`${className}`}>
            <Col xs={18}>
                <Row>
                    <span className={`${className}--title`}>{title}</span>
                </Row>
                <Row>
                    <span className={`${className}--desc`}>{desc}</span>
                </Row>
                <Row>
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
                                            name={'username'}
                                            type={'text'}
                                            className={`${className}--field`}
                                            label={'Username'}
                                        />

                                        <FastField
                                            component={InputField}
                                            name={'password'}
                                            type={'password'}
                                            className={`${className}--field`}
                                            label={'Password'}
                                        />

                                        <ButtonField
                                            content={'LOGIN'}
                                            type="submit"
                                            className={`${className}--btn`}
                                        />
                                    </Form>
                                )
                            }}
                        </Formik>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default FormLogin
