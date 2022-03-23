import { Col, Row } from 'antd'

type IProps = {
    className: string
    title: string
    desc: string
}

function LogoFooter(props: IProps) {
    const { className, title, desc } = props
    return (
        <Row justify="center" className={`${className}`}>
            <Col>
                <Row>
                    <span className={`${className}--title`}>{title}</span>
                </Row>
                <Row>
                    <span className={`${className}--desc`}>{desc}</span>
                </Row>
            </Col>
        </Row>
    )
}

export default LogoFooter
