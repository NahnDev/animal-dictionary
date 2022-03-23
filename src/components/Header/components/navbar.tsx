import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

type IProps = {
    className: string
    listItem: Array<{ path: string; text: string }>
}

function NavbarCustom(props: IProps) {
    const { className, listItem } = props
    return (
        <Row className={`${className}`} justify="center" align="middle">
            {listItem.map((item, index) => {
                return (
                    <Col className={`${className}--item`} key={`navbar-item-${index}`}>
                        <Link to={item.path}>{item.text}</Link>
                    </Col>
                )
            })}
        </Row>
    )
}

export default NavbarCustom
