import { Row, Table } from 'antd'
import Column from 'antd/lib/table/Column'
import React from 'react'
import { classFeature } from '../../../constants/className'
import Action from './action'

type IProps = {
    dataSource: Array<any>
    columns: Array<any>

    handleTableChange: Function
    handleAction: Function
    isHaveImage?: boolean
    pageSize?: number
}

const className = classFeature.admin

function TableCustom(props: IProps) {
    const { dataSource, columns, handleTableChange, handleAction, isHaveImage, pageSize } = props

    return (
        <Row>
            <Table
                dataSource={dataSource}
                size={'small'}
                pagination={{ pageSize: pageSize || 6 }}
                scroll={{ y: 300 }}
                onChange={(value) => handleTableChange(value)}
                className={`${className}__table`}
            >
                {columns.map((value, index) => {
                    return <Column {...value} key={`column-${index}`} />
                })}
                {/* {isHaveImage && (
                    <Column
                        title="Image"
                        key="urlImage"
                        width={150}
                        render={(record:any) =>
                            ImageTable({
                                src: record.urlImage,
                                width: 150,
                            })
                        }
                    />
                )} */}
                <Column
                    title="Action"
                    key="action"
                    width={100}
                    render={(record) =>
                        Action({
                            action: handleAction,
                            element: record,
                        })
                    }
                />
            </Table>
        </Row>
    )
}

export default TableCustom
