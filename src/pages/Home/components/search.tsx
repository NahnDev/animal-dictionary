import { Row } from 'antd'
import React from 'react'

type IProps = {
    content: any
    className: string
}

function Search(props: IProps) {
    const { content, className } = props
    return (
        <Row align="middle" justify="space-between" className={`${className}`}>
            <input type="text" placeholder={content.placeholder} className={`${className}-input`} />
            <span className={`${className}-icon`}>
                <content.icon />
            </span>
        </Row>
    )
}

export default Search
