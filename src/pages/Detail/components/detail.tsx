import { Col, Row } from 'antd'
import React from 'react'
import { Animal } from '../../../types/Animal'

type IProps = {
    className: string
    data: Animal
}

function DetailAnimal(props: IProps) {
    const { className, data } = props

    return (
        <Row className={`${className}`}>
            <Col xs={24}>
                <span className={`${className}--title`}>{data.scienceName}</span>
                <span className={`${className}--label`}>{`${data.name} - ${data.nameplate}`}</span>
                {typeof data.regnum !== 'string' && (
                    <span
                        className={`${className}--text r-1`}
                    >{`Regnum: ${data.regnum.name}`}</span>
                )}
                {typeof data.phylum !== 'string' && (
                    <span
                        className={`${className}--text r-1`}
                    >{`Phylum: ${data.phylum.name}`}</span>
                )}
                {typeof data.animalCls !== 'string' && (
                    <span
                        className={`${className}--text r-1`}
                    >{`Class: ${data.animalCls.name}`}</span>
                )}
                {typeof data.ordo !== 'string' && (
                    <span className={`${className}--text r-1`}>{`Ordo: ${data.ordo.name}`}</span>
                )}
                {typeof data.familia !== 'string' && (
                    <span
                        className={`${className}--text r-1`}
                    >{`Familia: ${data.familia.name}`}</span>
                )}

                <span className={`${className}--label`}>{`Conserve`}</span>
                <span className={`${className}--text r-1`}>{`Value: ${data.value}`}</span>
                <span className={`${className}--text r-1`}>{`IUCN: ${data.IUCN}`}</span>
                <span className={`${className}--text r-1`}>{`VRB: ${data.VRB}`}</span>
                <span className={`${className}--text r-2`}>{`Decree: ${data.Decree}`}</span>
                <span className={`${className}--text r-2`}>{`CITES: ${data.CITES}`}</span>
            </Col>
        </Row>
    )
}

export default DetailAnimal
