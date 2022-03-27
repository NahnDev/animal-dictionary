import { Col, Row } from 'antd'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import userApi from '../../api/userApi'
import { classFeature } from '../../constants/className'
import { CONTENT_LOGIN } from '../../constants/content'
import Images from '../../constants/images'
import { userState } from '../../recoil/userState'
import { FormLoginUser } from '../../types/User'
import FormLogin from './components/formLogin'
import './login.scss'

const className = classFeature.login
const content = CONTENT_LOGIN

function Login() {
    const setUser = useSetRecoilState(userState)

    const postLogin = async (value: FormLoginUser) => {
        try {
            const response = await userApi.postLogin(value)
            setUser({ isLogin: true, ...response.user })
            localStorage.setItem('token', JSON.stringify(response.accessToken))
            localStorage.setItem('_id', response.user._id || '')
        } catch (error: any) {
            console.log(error)
        }
    }

    const handleSubmit = (value: FormLoginUser) => {
        postLogin(value)
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
