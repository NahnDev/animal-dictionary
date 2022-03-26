import { Row } from 'antd'
import CardAnimal from '../../../components/cardAnimal'

type IProps = {
    className: string
    data: any
}

function ListAnimal(props: IProps) {
    const { className, data } = props
    return (
        <Row className={`${className}`}>
            {data.map((animal: any, index: number) => {
                return (
                    <CardAnimal
                        key={`card-${index}`}
                        className={`${className}--card`}
                        animal={animal}
                    />
                )
            })}
        </Row>
    )
}

export default ListAnimal
