import { Col, Row } from 'antd'
import { classHome } from '../../constants/className'
import { CONTENT_HOME } from '../../constants/content'
import HowItWork from './components/howitwork'
import Landing from './components/landing'
import ListAnimal from './components/listAnimals'

import './home.scss'

type IProps = {}

const className = classHome.home
const content = CONTENT_HOME

function Home(props: IProps) {
    return (
        <Row className={`${className}`}>
            <Col xs={24}>
                <Landing
                    content={content.landing}
                    className={`${className}__landing`}
                    listAnimal={valueTest}
                />
                <HowItWork className={`${className}__howitwork`} content={content.howitwork} />
                <ListAnimal
                    className={`${className}__list`}
                    listAnimal={valueTest}
                    content={content.listAnimal}
                />
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
]

export default Home
