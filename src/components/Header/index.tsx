import { Col, Row } from 'antd'
import { useRecoilValue } from 'recoil'
import { classComponent } from '../../constants/className'
import { CONTENT_COMPONENT } from '../../constants/content'
import { userState } from '../../recoil/userState'
import LogoProject from './components/logo'
import NavbarCustom from './components/navbar'
import UserLogout from './components/userLogout'
import './header.scss'

type IProps = {}
const className = classComponent.header
const content = CONTENT_COMPONENT.header

function Header(props: IProps) {
    const {} = props
    const user = useRecoilValue(userState)
    const handleLogout = () => {
        console.log('logout')
    }

    return (
        <Row justify="space-between" className={`${className}`} align="middle">
            <Col>
                <LogoProject className={`${className}__logo`} title={content.titleLogo} />
            </Col>
            <Col>
                {user.isLogin ? (
                    <UserLogout
                        className={`${className}__navbar`}
                        item={content.textLogout}
                        text={content.textUser}
                        nameUser={'Henry'}
                        handleLogout={handleLogout}
                    />
                ) : (
                    <NavbarCustom className={`${className}__navbar`} listItem={content.navbar} />
                )}
            </Col>
        </Row>
    )
}

export default Header
