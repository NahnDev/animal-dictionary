import { Col, Row } from 'antd'
import React from 'react'
import { classFeature } from '../../../../../constants/className'
import { CONTENT_ADMIN } from '../../../../../constants/content'
import { User } from '../../../../../types/User'
import Search from '../../../../Home/components/search'
import TableCustom from '../../../components/tableCustom'

type IProps = {
    handleAction: Function
    dataSource: Array<User>
}

const content = CONTENT_ADMIN.userPages
const className = classFeature.admin

function UserMain(props: IProps) {
    const { handleAction, dataSource } = props

    const handleTableChange = () => {}

    return (
        <Row>
            <Col xs={24}>
                <Row justify="space-between" align="middle" className={`${className}__head`}>
                    <Col>
                        <span className={`${className}__head--title`}>{content.title}</span>
                    </Col>
                    <Col>
                        <Row>
                            <Search
                                className={`${className}__head--search`}
                                content={content.search}
                            />
                            <button
                                className={`${className}__head--btn`}
                                onClick={() => handleAction({ type: 'add' })}
                            >
                                {content.textAddUser}
                            </button>
                        </Row>
                    </Col>
                </Row>
                <TableCustom
                    dataSource={dataSource}
                    columns={content.columnsTable}
                    handleTableChange={handleTableChange}
                    handleAction={handleAction}
                    pageSize={content.pageSize}
                />
            </Col>
        </Row>
    )
}

export default UserMain
