import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import CardAnimal from '../../../components/cardAnimal'

type IProps = {
    className: string
    content: any
    listAnimal: Array<{ title: string; name: string; desc: string; url: string }>
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
                        return <CardAnimal className={`${className}--card`} animal={animal} />
                    })}
                </Row>
                <Row justify="center">
                    <Link className={`${className}--link`} to={content.path}>
                        {content.textLink}
                    </Link>
                </Row>
            </Col>
        </Row>
    )
}

export default ListAnimal
