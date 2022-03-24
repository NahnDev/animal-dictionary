import { Carousel, Col, Row } from 'antd'
import { CarouselRef } from 'antd/lib/carousel'
import { valueType } from 'antd/lib/statistic/utils'
import React, { useRef, useState } from 'react'

type IProps = {
    className: string
    listImage: Array<string>
}

function Images(props: IProps) {
    const { className, listImage } = props
    const [imageCurrent, setImageCurrent] = useState<valueType | undefined>(0)
    const slider = useRef<CarouselRef | null>()

    return (
        <Row className={`${className}`}>
            <Col>
                <Carousel
                    className={`${className}--carousel`}
                    dots={false}
                    ref={(ref: CarouselRef | null) => {
                        slider.current = ref
                    }}
                >
                    {listImage.map((url, index) => {
                        return (
                            <img
                                key={`carousel-${index}`}
                                className={`${className}--carousel-img`}
                                src={url}
                            />
                        )
                    })}
                </Carousel>
            </Col>
            <Col>
                <Row className={`${className}--list`}>
                    {listImage.map((url, index) => {
                        return (
                            <Col
                                key={`carousel-item-${index}`}
                                className={
                                    imageCurrent === index
                                        ? `${className}--list-item active`
                                        : `${className}--list-item`
                                }
                            >
                                <img
                                    onClick={() => {
                                        setImageCurrent(index)
                                        slider.current?.goTo(index)
                                    }}
                                    className={`${className}--list-img`}
                                    src={url}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </Col>
        </Row>
    )
}

export default Images
