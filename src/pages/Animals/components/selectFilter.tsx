import { Col, Dropdown, Menu, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import animalClsApi from '../../../api/animalClsApi'
import familiaApi from '../../../api/familiaApi'
import ordoApi from '../../../api/ordoApi'
import { searchState } from '../../../recoil/searchState'
import { ScienceInfo } from '../../../types/ScienceInfo'

const { Option } = Select

type IProps = {
    content: any
    className: string

    handleFilter: Function
}

function SelectFilter(props: IProps) {
    const { content, className, handleFilter } = props
    const search = useRecoilValue(searchState)

    const [listCategory, setListCategory] = useState<{
        familia?: Array<ScienceInfo>
        ordo?: Array<ScienceInfo>
        class?: Array<ScienceInfo>
    }>()

    const getAllListCategory = async () => {
        try {
            let data = { ...listCategory }
            const responseAnimalCls = await animalClsApi.getAnimalCls()
            data.class = responseAnimalCls

            const responseFamilia = await familiaApi.getFamilia()
            data.familia = responseFamilia

            const responseOrdo = await ordoApi.getOrdo()
            data.ordo = responseOrdo

            setListCategory(data)
        } catch (error: any) {
            console.log(error)
        }
    }

    const menuFilter = (
        <Menu className={`${className}-menu`}>
            <Row align="middle" justify="space-between">
                <Col xs={24}>
                    <span>{content.titleFamilia}</span>
                </Col>
                <Col xs={24}>
                    <Select
                        value={search.filter?.familia || 'Familia'}
                        bordered={false}
                        onChange={(val) => handleFilter(val, 'familia')}
                        placeholder={'Familia'}
                        className={`${className}-menu-select`}
                    >
                        {listCategory?.familia?.map((value, index) => {
                            return (
                                <Option key={`select-options-${index}`} value={value._id}>
                                    {value.name}
                                </Option>
                            )
                        })}
                    </Select>
                </Col>
            </Row>
            <Row align="middle" justify="space-between">
                <Col xs={24}>
                    <span>{content.titleOrdo}</span>
                </Col>
                <Col xs={24}>
                    <Select
                        value={search.filter?.ordo || 'Ordo'}
                        bordered={false}
                        onChange={(val) => handleFilter(val, 'ordo')}
                        placeholder={'Ordo'}
                        className={`${className}-menu-select`}
                    >
                        {listCategory?.ordo?.map((value, index) => {
                            return (
                                <Option key={`select-options-${index}`} value={value._id}>
                                    {value.name}
                                </Option>
                            )
                        })}
                    </Select>
                </Col>
            </Row>
            <Row align="middle" justify="space-between">
                <Col xs={24}>
                    <span>{content.titleClass}</span>
                </Col>
                <Col xs={24}>
                    <Select
                        value={search.filter?.animalCls || 'Class'}
                        bordered={false}
                        onChange={(val) => handleFilter(val, 'class')}
                        placeholder={'Class'}
                        className={`${className}-menu-select`}
                    >
                        {listCategory?.class?.map((value, index) => {
                            return (
                                <Option key={`select-options-${index}`} value={value._id}>
                                    {value.name}
                                </Option>
                            )
                        })}
                    </Select>
                </Col>
            </Row>
        </Menu>
    )

    useEffect(() => {
        getAllListCategory()
    }, [])

    return (
        <Row align="middle">
            <Dropdown
                className={`${className}`}
                overlay={menuFilter}
                trigger={['click']}
                placement="bottomRight"
                arrow
            >
                <button>
                    <content.iconFilter />
                </button>
            </Dropdown>
        </Row>
    )
}

export default SelectFilter
