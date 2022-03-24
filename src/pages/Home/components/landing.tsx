import { Col, Row } from 'antd'
import CardAnimal from '../../../components/cardAnimal'
import Search from './search'

type IProps = {
    content: any
    className: string

    listAnimal: Array<{ title: string; name: string; desc: string; url: string }>
}

function Landing(props: IProps) {
    const { content, className, listAnimal } = props
    return (
        <Row align="middle" className={`${className}`}>
            <Col xs={24}>
                <span className={`${className}--title`}>{content.title}</span>
                <span className={`${className}--desc`}>{content.desc}</span>
                <Search className={`${className}--search`} content={content.search} />

                <Row>
                    {listAnimal.map((animal, index) => {
                        return <CardAnimal animal={animal} className={`${className}--card`} />
                    })}
                </Row>
            </Col>
        </Row>
    )
}

export default Landing
