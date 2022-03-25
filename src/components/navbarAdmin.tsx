import { Col, Row } from 'antd'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CONTENT_COMPONENT } from '../constants/content'

type IProps = {
    className: string
}

const content = CONTENT_COMPONENT.navbarAdmin.listItem

function NavbarAdmin(props: IProps) {
    const location = useLocation()
    const { className } = props

    const pathName = location.pathname.slice(
        location.pathname.lastIndexOf('/') + 1,
        location.pathname.length
    )

    return (
        <Row className={`${className}`}>
            <Col xs={24}>
                {content.map((val, index) => {
                    return (
                        <Row key={`navbar-admin-${index}`} justify="center">
                            <Link
                                to={val.path}
                                className={
                                    pathName === val.path
                                        ? `${className}--item active`
                                        : `${className}--item`
                                }
                            >
                                {val.text}
                            </Link>
                        </Row>
                    )
                })}
            </Col>
        </Row>
    )
}

export default NavbarAdmin
