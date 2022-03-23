import { Row } from 'antd'
import { MouseEventHandler } from 'react'

type ButtonFieldProps = {
    content: string
    type: 'button' | 'submit' | 'reset' | undefined
    className: string
    icon?: any
    handleClick?: MouseEventHandler<HTMLDivElement> | undefined
}

function ButtonField(props: ButtonFieldProps) {
    const { content, type, className, icon, handleClick } = props

    return (
        <Row align={'middle'} justify={'center'} className={className} onClick={handleClick}>
            {icon && <span className={`${className}-icon`}>{icon}</span>}
            <button type={type} className={`${className}-content`}>
                {content}
            </button>
        </Row>
    )
}

export default ButtonField
