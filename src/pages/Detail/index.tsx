import { Button, Col, Input, Row } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import animalsApi from '../../api/animalsApi'
import { classFeature } from '../../constants/className'
import { CONTENT_DETAIL } from '../../constants/content'
import ButtonField from '../../custom-fields/BtnSubmit'
import InputField from '../../custom-fields/InputField'
import { openNotificationWithIcon } from '../../functions/global'
import { animalsState } from '../../recoil/animalsState'
import { currentAnimalState } from '../../recoil/currentAnimalState'
import { searchState } from '../../recoil/searchState'
import { Search } from '../../types/Search'
import DescriptionsAnimal from './components/descriptions'
import DetailAnimal from './components/detail'
import Images from './components/images'
import ListAnimal from './components/listAnimals'
import './detail.scss'

const className = classFeature.animalDetail
const content = CONTENT_DETAIL

function Detail() {
    const params = useParams()
    const [currentAnimal, setCurrenAnimal] = useRecoilState(currentAnimalState)
    const [animals, setAnimals] = useRecoilState(animalsState)
    const setSearch = useSetRecoilState<Search>(searchState)

    const getAnimalDetail = async (_id: string) => {
        try {
            const response = await animalsApi.getAnimalDetail(_id)
            setCurrenAnimal(response)
        } catch (error: any) {
            console.log(error)
        }
    }

    const getAnimal = async () => {
        try {
            const params = {}
            const response = await animalsApi.getAnimal(params)
            setAnimals(response)
        } catch (error: any) {
            console.log(error)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        if (!currentAnimal._id && params.id) {
            getAnimalDetail(params.id)
        }

        if (animals.length === 0) {
            getAnimal()
        }
        setSearch({})
    }, [])
    const handleSubmitFeedback = function () {
        openNotificationWithIcon(
            'success',
            'Gửi phản hồi thành công',
            'Cảm ơn bạn đã góp ý, chúng tôi sẽ kiểm tra lại thông tin và liên hệ với bạn thông tin về những thay đổi'
        )
    }

    return (
        <Row className={`${className}`}>
            <Col xs={24}>
                {currentAnimal._id && (
                    <>
                        <Row align="middle">
                            <Col xs={14}>
                                <Images
                                    className={`${className}__images`}
                                    listImage={currentAnimal.images}
                                />
                            </Col>
                            <Col xs={10}>
                                <DetailAnimal
                                    className={`${className}__detail-animal`}
                                    data={currentAnimal}
                                />
                            </Col>
                        </Row>
                        <DescriptionsAnimal
                            className={`${className}__desc-animal`}
                            data={currentAnimal}
                        />
                    </>
                )}

                <ListAnimal
                    className={`${className}__list`}
                    listAnimal={animals}
                    content={content.listAnimal}
                />
                <Row>
                    <Col
                        xs={24}
                        style={{ padding: 20, display: 'flex', gap: 10, flexDirection: 'column' }}
                    >
                        <h4 style={{ fontWeight: 'bold', marginLeft: -10 }}>Góp ý cho chúng tối</h4>
                        <label style={{ fontWeight: 'bold' }}>Email của bạn</label>
                        <Input type="email"></Input>
                        <label style={{ fontWeight: 'bold' }}>Nội dung góp ý</label>{' '}
                        <TextArea style={{ resize: 'none' }}></TextArea>
                        <Button
                            className=""
                            style={{
                                background: 'whitesmoke',
                                width: '100%',
                                borderRadius: '100vh',
                                color: 'black',
                            }}
                            onClick={handleSubmitFeedback}
                        >
                            Gửi góp ý
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Detail
