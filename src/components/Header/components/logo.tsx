import { Row } from 'antd'

type IProps = {
    className: string
    title: string
}

function LogoProject(props: IProps) {
    const { className, title } = props
    return (
        <Row justify="center" className={`${className}`}>
            <span>{title}</span>
        </Row>
    )
}

export default LogoProject
