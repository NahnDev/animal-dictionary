import { Col, Row } from 'antd'
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

    return (
        <Row justify="space-between" align="middle">
            <Col>
                <span className={`${className}--title`}>{title}</span>
                <span className={`${className}--desc`}>{desc}</span>
            </Col>

            <Col>
                <Row>
                    <Search
                        className={`${className}--search`}
                        content={contentSearch}
                        handleFilter={handleFilter}
                    />
                    <SelectFilter
                        className={`${className}--select`}
                        content={contentFilter}
                        handleFilter={handleFilter}
                    />
                </Row>
            </Col>
        </Row>
    )
}

export default Filter
