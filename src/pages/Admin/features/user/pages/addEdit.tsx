import { Col, Row } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import { classFeature } from '../../../../../constants/className'
import { CONTENT_ADMIN } from '../../../../../constants/content'
import { User } from '../../../../../types/User'
import FormAddEdit from '../components/formAddEdit'

type IProps = {
    user?: User
    handleSubmit: Function
}

const content = CONTENT_ADMIN.userPages
const className = classFeature.admin

function UserAddEdit(props: IProps) {
    const { user, handleSubmit } = props
    const params = useParams()

    const isAddMode = !params.id

    const initialValues = {
        name: user?.name || '',
        username: user?.username || '',
        password: user?.password || '',
        role: user?.role || 'VIEWER',
    }

    return (
        <Row justify="center">
            <Col xs={16}>
                <Row align="middle" className={`${className}__head`}>
                    <Col>
                        <span className={`${className}__head--title`}>
                            {isAddMode ? content.textAddUser : content.textEditUser}
                        </span>
                    </Col>
                </Row>
                <FormAddEdit
                    handleSubmit={handleSubmit}
                    initialValues={initialValues}
                    isAddMode={isAddMode}
                />
            </Col>
        </Row>
    )
}

export default UserAddEdit
