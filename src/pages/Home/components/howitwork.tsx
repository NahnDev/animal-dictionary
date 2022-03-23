import { Col, Row } from 'antd'

type IProps = {
    className: string
    content: any
}

function HowItWork(props: IProps) {
    const { className, content } = props
    return (
        <Row justify="end" align="middle" className={`${className}`}>
            <Col xs={10}>
                <Row>
                    <span className={`${className}--title`}>{content.title}</span>
                    <span className={`${className}--title-desc`}>{content.descTitle}</span>
                </Row>
                <Row>
                    <span className={`${className}--desc`}>{content.desc}</span>
                </Row>
                <Row>
                    {content.listStep.map((step: any, index: any) => {
                        return (
                            <Col xs={12} key={`step-${index}`} className={`${className}--item`}>
                                <Row>
                                    <span className={`${className}--item-icon`}>
                                        <step.icon />
                                    </span>
                                </Row>
                                <Row>
                                    <span className={`${className}--item-title`}>{step.title}</span>
                                </Row>
                                <Row>
                                    <span className={`${className}--item-desc`}>{step.desc}</span>
                                </Row>
                            </Col>
                        )
                    })}
                </Row>
            </Col>
        </Row>
    )
}

export default HowItWork
