import { Col, Row } from 'antd'
import Filter from './components/filter'
import ListAnimal from './components/listAnimal'

import { classFeature } from '../../constants/className'
import { CONTENT_ANIMALS } from '../../constants/content'

import './animals.scss'

type IProps = {}

const className = classFeature.animals
const content = CONTENT_ANIMALS

function Animals(props: IProps) {
    const handleFilter = (value: any) => {
        console.log(value)
    }
    return (
        <Row className={`${className}`}>
            <Col xs={24}>
                <Filter
                    handleFilter={handleFilter}
                    className={`${className}__filter`}
                    title={content.title}
                    desc={content.desc}
                    contentSearch={content.search}
                    contentFilter={content.filter}
                />
                <ListAnimal className={`${className}__list`} data={valueTest} />
            </Col>
        </Row>
    )
}

const valueTest = [
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

export default Animals
