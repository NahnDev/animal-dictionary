import React from 'react'
import { Row } from 'antd'
import { CONTENT_ADMIN } from '../../../constants/content'
import { classFeature } from '../../../constants/className'

type IProps = {
    action: Function
    element: any
}

const content = CONTENT_ADMIN.component.actionList
const className = classFeature.admin

function Action(props: IProps) {
    const { action, element } = props

    return (
        <Row justify="center" align="middle">
            {content.map((value: any, index: number) => {
                return (
                    <div
                        key={`action-${index}`}
                        className={`${className}__action--item`}
                        onClick={() => action({ type: value.key, value: element })}
                    >
                        <value.icon />
                    </div>
                )
            })}
        </Row>
    )
}

export default Action
