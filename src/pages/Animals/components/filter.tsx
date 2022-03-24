import { Col, Row } from 'antd'
import { useState } from 'react'
import Search from './search'
import SelectFilter from './selectFilter'

type IProps = {
    title: string
    desc: string
    className: string

    contentSearch: any
    contentFilter: any

    handleFilter: Function
}

function Filter(props: IProps) {
    const { title, desc, className, contentSearch, contentFilter, handleFilter } = props
    const [valueFilter, setValueFilter] = useState<{ search: string; select: string }>({
        search: '',
        select: '',
    })

    return (
        <Row justify="space-between" align="middle">
            <Col>
                <span className={`${className}--title`}>{title}</span>
                <span className={`${className}--desc`}>{desc}</span>
            </Col>

            <Col>
                <Row onMouseLeave={() => handleFilter(valueFilter)}>
                    <Search
                        handleFilter={(val: string) =>
                            setValueFilter({ ...valueFilter, search: val })
                        }
                        className={`${className}--search`}
                        content={contentSearch}
                    />
                    <SelectFilter
                        handleFilter={(val: string) =>
                            setValueFilter({ ...valueFilter, select: val })
                        }
                        className={`${className}--select`}
                        content={contentFilter}
                    />
                </Row>
            </Col>
        </Row>
    )
}

export default Filter
