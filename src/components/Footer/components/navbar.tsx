import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

type IProps = {
    className: string
    listItem: Array<{ path: string; text: string }>
}

function NavbarFooter(props: IProps) {
    const { className, listItem } = props
    return (
        <Row className={`${className}`} justify="center" align="middle">
            <Col>
                {listItem.map((item, index) => {
                    return (
                        <Row className={`${className}--item`} key={`navbar-item-${index}`}>
                            <Link to={item.path}>{item.text}</Link>
                        </Row>
                    )
                })}
            </Col>
        </Row>
    )
}

export default NavbarFooter
