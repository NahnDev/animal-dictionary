import { Col, Row } from 'antd'
import { useEffect } from 'react'
import { classFeature } from '../../constants/className'
import { CONTENT_LOGIN } from '../../constants/content'
import Images from '../../constants/images'
import FormLogin from './components/formLogin'

import './login.scss'

const className = classFeature.login
const content = CONTENT_LOGIN

function Login() {
    const handleSubmit = (value: { username: string; password: string }) => {
        console.log(value)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Row align="middle" className={`${className}`}>
            <Col xs={12}>
                <img
                    className={`${className}__bg`}
                    src={Images.LOGIN_BG}
                    alt={'login-background'}
                />
            </Col>
            <Col xs={12}>
                <FormLogin
                    className={`${className}__form`}
                    handleSubmit={handleSubmit}
                    title={content.title}
                    desc={content.desc}
                />
            </Col>
        </Row>
    )
}

export default Login
