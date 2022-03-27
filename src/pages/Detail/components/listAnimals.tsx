import { Col, Row } from 'antd'
import CardAnimal from '../../../components/cardAnimal'
import { Animal } from '../../../types/Animal'

type IProps = {
    className: string
    content: any
    listAnimal: Array<Animal>
}

function ListAnimal(props: IProps) {
    const { className, listAnimal, content } = props
    return (
        <Row align="middle" className={`${className}`}>
            <Col xs={24}>
                <Row>
                    <span className={`${className}--title`}>{content.title}</span>
                    <span className={`${className}--title-desc`}>{content.descTitle}</span>
                </Row>
                <Row>
                    <span className={`${className}--desc`}>{content.desc}</span>
                </Row>
                <Row justify="center">
                    {listAnimal.map((animal: any, index: any) => {
                        if (index < 3)
                            return (
                                <CardAnimal
                                    key={`list-animal-detail-${index}`}
                                    className={`${className}--card`}
                                    animal={animal}
                                />
                            )
                        return true
                    })}
                </Row>
            </Col>
        </Row>
    )
}

export default ListAnimal
