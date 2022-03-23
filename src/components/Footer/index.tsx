import { Col, Row } from 'antd'
import { classComponent } from '../../constants/className'
import { CONTENT_COMPONENT } from '../../constants/content'
import ContactFooter from './components/contact'
import LogoFooter from './components/logoFooter'
import NavbarFooter from './components/navbar'

import './footer.scss'

type IProps = {}

const className = classComponent.footer
const content = CONTENT_COMPONENT.footer

function Footer(props: IProps) {
    return (
        <Row justify="space-between" className={`${className}`} align="middle">
            <Col>
                <LogoFooter
                    className={`${className}__logo`}
                    title={content.titleLogo}
                    desc={content.descLogo}
                />
            </Col>
            <Col>
                <Row>
                    <Col>
                        <NavbarFooter
                            className={`${className}__navbar`}
                            listItem={content.navbar}
                        />
                    </Col>
                    <Col>
                        <ContactFooter
                            className={`${className}__contact`}
                            listContact={content.contact}
                            listIcon={content.icons}
                            title={content.titleContact}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Footer
