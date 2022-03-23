import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

type IProps = {
    className: string
    title: string
    listContact: Array<string>
    listIcon: Array<any>
}

function ContactFooter(props: IProps) {
    const { className, listContact, listIcon, title } = props
    return (
        <Row className={`${className}`} justify="center" align="middle">
            <Col>
                <Row>
                    <span className={`${className}--title`}>{title}</span>
                </Row>
                {listContact.map((item, index) => {
                    return (
                        <Row className={`${className}--text`} key={`navbar-item-footer-${index}`}>
                            <span>{item}</span>
                        </Row>
                    )
                })}
                <Row>
                    {listIcon.map((item, index) => {
                        return (
                            <span
                                className={`${className}--icon`}
                                key={`navbar-icon-footer-${index}`}
                            >
                                <item.icon />
                            </span>
                        )
                    })}
                </Row>
            </Col>
        </Row>
    )
}

export default ContactFooter
