import { Col, Row } from 'antd'
import { useRecoilState } from 'recoil'
import { classComponent } from '../../constants/className'
import { CONTENT_COMPONENT } from '../../constants/content'
import { userState } from '../../recoil/userState'
import LogoProject from './components/logo'
import NavbarCustom from './components/navbar'
import UserLogout from './components/userLogout'
import './header.scss'

const className = classComponent.header
const content = CONTENT_COMPONENT.header

function Header() {
    const [user, setUser] = useRecoilState(userState)
    const handleLogout = () => {
        localStorage.clear()
        setUser({ ...user, isLogin: false })
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
                        nameUser={user.name}
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
