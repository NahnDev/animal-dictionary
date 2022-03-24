import { Row, Select } from 'antd'
import React from 'react'

const { Option } = Select

type IProps = {
    content: any
    className: string
    handleFilter: Function
}

const listSelect = [
    { val: 'Lớp', label: 'Lớp' },
    { val: 'Bộ', label: 'Bộ' },
]

function SelectFilter(props: IProps) {
    const { content, className, handleFilter } = props

    return (
        <Row align="middle">
            <Select
                defaultValue={content.defaultValue}
                bordered={false}
                className={`${className}`}
                onChange={(val) => handleFilter(val)}
            >
                <Option value={content.defaultValue}>{content.defaultValueLabel}</Option>
                {listSelect.map((value, index) => {
                    return (
                        <Option key={`select-options-${index}`} value={value.val}>
                            {value.label}
                        </Option>
                    )
                })}
            </Select>
        </Row>
    )
}

export default SelectFilter
