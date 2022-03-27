import { Col, Row } from 'antd'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

type IProps = {
    className: string
    listItem: Array<{ path: string; text: string }>
}

function NavbarCustom(props: IProps) {
    const { className, listItem } = props
    const location = useLocation()

    const pathName = location.pathname.slice(
        location.pathname.lastIndexOf('/') + 1,
        location.pathname.length
    )

    return (
        <Row className={`${className}`} justify="center" align="middle">
            {listItem.map((item, index) => {
                return (
                    <Col key={`navbar-item-${index}`}>
                        <Link
                            className={
                                item.path.indexOf(pathName) !== -1
                                    ? `${className}--item active`
                                    : `${className}--item`
                            }
                            to={item.path}
                        >
                            {item.text}
                        </Link>
                    </Col>
                )
            })}
        </Row>
    )
}

export default NavbarCustom
