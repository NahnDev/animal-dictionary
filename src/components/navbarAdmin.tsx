import { Col, Row } from 'antd'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { CONTENT_COMPONENT } from '../constants/content'
import { userState } from '../recoil/userState'

type IProps = {
    className: string
}

const content = CONTENT_COMPONENT.navbarAdmin.listItem

function NavbarAdmin(props: IProps) {
    const user = useRecoilValue(userState)

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
                    const arr = val.roles.find((element) => element === user.role)
                    if (arr) {
                        return (
                            <Row key={`navbar-admin-${index}`} justify="center">
                                <Link
                                    to={val.path}
                                    className={
                                        val.path.indexOf(pathName) !== -1
                                            ? `${className}--item active`
                                            : `${className}--item`
                                    }
                                >
                                    {val.text}
                                </Link>
                            </Row>
                        )
                    }
                    return true
                })}
            </Col>
        </Row>
    )
}

export default NavbarAdmin
