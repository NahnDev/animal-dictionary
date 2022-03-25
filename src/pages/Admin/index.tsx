import { Col, Row } from 'antd'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import NavbarAdmin from '../../components/navbarAdmin'
import { classFeature } from '../../constants/className'
import { ADMIN_ROUTE } from '../../routes/admin.route'
import './admin.scss'

const className = classFeature.admin

function Admin() {
    return (
        <Row justify="center">
            <Header />

            <Col xs={20}>
                <Row className={`${className}`}>
                    <Col xs={6}>
                        <NavbarAdmin className={`${className}__navbar`} />
                    </Col>
                    <Col xs={18}>
                        <Routes>
                            <Route path="*" element={<Navigate to="user" />} />
                            {ADMIN_ROUTE.map((prop, index) => (
                                <Route key={index} {...prop} />
                            ))}
                        </Routes>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Admin
