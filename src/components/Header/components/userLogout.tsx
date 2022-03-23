import { Col, Row } from 'antd'
import React from 'react'

type IProps = {
    className: string
    item: string
    text: string
    nameUser: string

    handleLogout: Function
}

function UserLogout(props: IProps) {
    const { className, item, text, nameUser, handleLogout } = props
    return (
        <Row className={`${className}`} justify="center" align="middle">
            <Col className={`${className}--text`}>
                <span>{`${text} ${nameUser}`}</span>
            </Col>
            <Col className={`${className}--item`}>
                <button onClick={() => handleLogout()}>{item}</button>
            </Col>
        </Row>
    )
}

export default UserLogout
