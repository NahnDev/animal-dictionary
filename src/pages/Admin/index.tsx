import { Col, Row } from 'antd'
import { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import Header from '../../components/Header'
import NavbarAdmin from '../../components/navbarAdmin'
import { classFeature } from '../../constants/className'
import { userState } from '../../recoil/userState'
import { ADMIN_ROUTE } from '../../routes/admin.route'
import './admin.scss'

const className = classFeature.admin

function Admin() {
    const user = useRecoilValue(userState)
    const nav = useNavigate()

    useEffect(() => {
        user && user.role === 'ADMIN' ? nav('/admin/user') : nav('/admin/animals')
    }, [])

    return (
        <Row justify="center">
            <Col xs={20}>
                <Header />
            </Col>

            <Col xs={20}>
                <Row className={`${className}`}>
                    <Col xs={6}>
                        <NavbarAdmin className={`${className}__navbar`} />
                    </Col>
                    <Col xs={18}>
                        <Routes>
                            {ADMIN_ROUTE.map((prop, index) => {
                                const arr = prop.roles.find((element) => element === user.role)
                                if (arr) {
                                    return <Route key={index} {...prop.router} />
                                }
                                return true
                            })}
                        </Routes>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Admin
