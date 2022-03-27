import { Row } from 'antd'
import React, { useState } from 'react'

type IProps = {
    content: any
    className: string

    onSearch?: Function
}

function Search(props: IProps) {
    const { content, className, onSearch } = props
    const [searchValue, setSearchValue] = useState<string>()
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                onSearch && onSearch(searchValue)
                setSearchValue('')
            }}
        >
            <Row align="middle" justify="space-between" className={`${className}`}>
                <input
                    value={searchValue}
                    type="text"
                    name="search"
                    placeholder={content.placeholder}
                    className={`${className}-input`}
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }}
                />
                <button type="submit" className={`${className}-icon`}>
                    <content.icon />
                </button>
            </Row>
        </form>
    )
}

export default Search
