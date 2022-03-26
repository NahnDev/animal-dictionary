import { Form, Input, Row } from 'antd'

type AreaFieldProps = {
    field?: any
    form?: any

    type: string
    label?: string
    placeholder: string
    disabled?: boolean
    icon?: any

    className: string
    row: number
}

const { TextArea } = Input

function AreaField(props: AreaFieldProps) {
    const { field, form, label, row, placeholder, className } = props

    const { name } = field

    const touched = form.touched[field.name]
    const hasError = form.errors[field.name]
    const submittedError = hasError
    const touchedError = hasError && touched

    return (
        <Form.Item
            help={submittedError || touchedError ? hasError : false}
            validateStatus={submittedError || touchedError ? 'error' : ''}
            className={`${className}`}
        >
            {label && (
                <label htmlFor={name} className={`${className}-label`}>
                    {label}
                </label>
            )}
            <Row className={`${className}-input`} align={'middle'}>
                <TextArea
                    id={name}
                    {...field}
                    placeholder={placeholder}
                    rows={row}
                    className={`${className}-input-field`}
                    bordered={false}
                />
            </Row>
        </Form.Item>
    )
}

export default AreaField
