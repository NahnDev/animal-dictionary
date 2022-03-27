import { Row } from 'antd'
import React from 'react'
import { useRecoilState } from 'recoil'
import { searchState } from '../../../recoil/searchState'
import { SearchType } from '../../../types/Search'

type IProps = {
    content: any
    className: string
    handleFilter: Function
}

function Search(props: IProps) {
    const { content, className, handleFilter } = props
    const [search, setSearch] = useRecoilState<SearchType>(searchState)

    return (
        <Row align="middle" justify="space-between" className={`${className}`}>
            <input
                value={search.filter?.search}
                type="text"
                placeholder={content.placeholder}
                className={`${className}-input`}
                onChange={(e) => handleFilter(e.target.value, 'search')}
            />
            <span className={`${className}-icon`}>
                <content.icon />
            </span>
        </Row>
    )
}

export default Search
