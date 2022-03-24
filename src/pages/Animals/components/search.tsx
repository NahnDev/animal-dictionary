import { Row } from 'antd'
import React from 'react'

type IProps = {
    content: any
    className: string
    handleFilter: Function
}

function Search(props: IProps) {
    const { content, className, handleFilter } = props

    return (
        <Row align="middle" justify="space-between" className={`${className}`}>
            <input
                type="text"
                placeholder={content.placeholder}
                className={`${className}-input`}
                onChange={(e) => handleFilter(e.target.value)}
            />
            <span className={`${className}-icon`}>
                <content.icon />
            </span>
        </Row>
    )
}

export default Search
