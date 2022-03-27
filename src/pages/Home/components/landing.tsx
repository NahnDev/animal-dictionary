import { Col, Row } from 'antd'
import CardAnimal from '../../../components/cardAnimal'
import { Animal } from '../../../types/Animal'
import Search from './search'

type IProps = {
    content: any
    className: string

    listAnimal: Array<Animal>
    onSearch: Function
}

function Landing(props: IProps) {
    const { content, className, listAnimal, onSearch } = props
    return (
        <Row align="middle" className={`${className}`}>
            <Col xs={24}>
                <span className={`${className}--title`}>{content.title}</span>
                <span className={`${className}--desc`}>{content.desc}</span>
                <Search
                    className={`${className}--search`}
                    content={content.search}
                    onSearch={onSearch}
                />

                <Row>
                    {listAnimal.map((animal, index) => {
                        if (index < 3)
                            return <CardAnimal animal={animal} className={`${className}--card`} />
                    })}
                </Row>
            </Col>
        </Row>
    )
}

export default Landing
