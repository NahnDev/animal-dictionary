import { Col, Row } from 'antd'
import { useEffect } from 'react'
import { classFeature } from '../../constants/className'
import { CONTENT_DETAIL } from '../../constants/content'
import DescriptionsAnimal from './components/descriptions'
import DetailAnimal from './components/detail'
import Images from './components/images'
import ListAnimal from './components/listAnimals'

import './detail.scss'

const className = classFeature.animalDetail
const content = CONTENT_DETAIL

function Detail() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Row className={`${className}`}>
            <Col xs={24}>
                <Row align="middle">
                    <Col xs={14}>
                        <Images className={`${className}__images`} listImage={valueTest.url} />
                    </Col>
                    <Col xs={10}>
                        <DetailAnimal className={`${className}__detail-animal`} data={valueTest} />
                    </Col>
                </Row>
                <DescriptionsAnimal className={`${className}__desc-animal`} data={valueTest} />
                <ListAnimal
                    className={`${className}__list`}
                    listAnimal={valueList}
                    content={content.listAnimal}
                />
            </Col>
        </Row>
    )
}

const valueTest = {
    tenKH: 'Ichthyophis nguyenorum Nishikawa, Matsui, and Orlov, 2012',
    tenTV: 'Ếch giun nguyễn',
    tenDP: 'Rắn trun đĩa',
    gioi: 'Động vật (Animalia)',
    nganh: 'Động vật có dây sống (chordata)',
    lop: 'AMPHIBIA (Linnaeus, 1758)',
    bo: 'GYMNOPHIONA (Muller, 1832)',
    ho: 'Ichthyophiidae Taylor, 1968, Ichthyophiidae Taylor, 1968 ,Ichthyophiidae Taylor, 1968 Ichthyophiidae Taylor, 1968',
    hinhthai:
        'Dài đuôi: 2,6 - 3,5; rộng đuôi: 2,8 - 3,5. Rộng đầu (HW: 6,6). Dài đầu hơn rộng đầu (HL/HW: 1,25-1,47). Cơ thể hơi tròn, dài, dạng rắn. Đầu dẹp, láng; rộng nhất ở mép miệng, hẹo về phía đầu. Mút mõm tròn; dài mõm bằng với ngang đầu ở vị trí mắt. Mắt nhỏ, không mi mắt, có một đôi râu (tentacle) ngắn nằm phía trước mắt. Hai bên thân có sọc  màu vàng bắt đầu từ sau mép miệng đến lỗ huyệt. Số nếp gấp quanh thân: 280 - 300; ở đuôi: 7-8. Đuôi ngắn hơi dẹt ở mặt bụng, phần đỉnh cùn, không có đốm màu cam hay vàng  ở mặt bụng. Mặt lưng có màu tím đen, bụng màu hoa cà nhạt, hai bên sườn có sọc màu vàng liên tục, không đứt quãng, chạy từ khoảng giữa hàm trên (mấu xúc - tu) đến gần mút đuôi. Mắt có viền mỏng màu trắng đục. Ghi chú:  Loài Ichthyophis bannanicus phân biệt với Ichthyophis nguyenorum dựa trên các đặc điểm: số nếp vòng quanh cơ thể của I. nguyenorum (312 – 318) ít hơn so với I. bannanicus (340); sọc bên thân của I. nguyenorum kéo dài đến mút đuôi so với sọc bị đứt quãng ở phía sau đuôi của I. bannanicus Nishikawa et al. (2012).',
    sinhthai:
        'Sống ở các vực nước (ao, vũng...) có nhiều bùn và lá mục, hay các khu vực đất nông nghiệp. Thức ăn gồm côn trùng, giun đất, nhện và những loài không xương sống nhỏ khác.',
    url: [
        'https://f5-zpcloud.zdn.vn/711969319811978783/145a22b183294c771538.jpg',
        'https://f5-zpcloud.zdn.vn/711969319811978783/145a22b183294c771538.jpg',
        'https://f5-zpcloud.zdn.vn/711969319811978783/145a22b183294c771538.jpg',
        'https://f5-zpcloud.zdn.vn/711969319811978783/145a22b183294c771538.jpg',
        'https://f5-zpcloud.zdn.vn/711969319811978783/145a22b183294c771538.jpg',
    ],
    sinhcanh: 'Rừng tràm đặc dụng,  rừng tràm trồng',
    diadiem: 'Rừng Tràm Mỹ Phước, Mỹ Phước, Mỹ Tú, Sóc Trăng.',
}

const valueList = [
    {
        title: 'Nhái bầu heymon',
        url: 'https://f5-zpcloud.zdn.vn/711969319811978783/145a22b183294c771538.jpg',
        name: 'Microhyla heymonsii Vogt, 1911',
        desc: 'Sống ở các vực nước (ao, vũng...) có nhiều bùn và lá mục, hay các khu vực đất nông nghiệp. Thức ăn gồm côn trùng, giun đất, nhện và những loài không xương sống nhỏ khác.',
    },
    {
        title: 'Nhái bầu heymon',
        url: 'https://f5-zpcloud.zdn.vn/711969319811978783/145a22b183294c771538.jpg',
        name: 'Microhyla heymonsii Vogt, 1911',
        desc: 'Sống ở các vực nước (ao, vũng...) có nhiều bùn và lá mục, hay các khu vực đất nông nghiệp. Thức ăn gồm côn trùng, giun đất, nhện và những loài không xương sống nhỏ khác.',
    },
    {
        title: 'Nhái bầu heymon',
        url: 'https://f5-zpcloud.zdn.vn/711969319811978783/145a22b183294c771538.jpg',
        name: 'Microhyla heymonsii Vogt, 1911',
        desc: 'Sống ở các vực nước (ao, vũng...) có nhiều bùn và lá mục, hay các khu vực đất nông nghiệp. Thức ăn gồm côn trùng, giun đất, nhện và những loài không xương sống nhỏ khác.',
    },
]

export default Detail
