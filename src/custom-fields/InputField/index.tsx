import { Form, Input, Row } from 'antd'

type InputFieldProps = {
    field?: any
    form?: any

    type: string
    label?: string
    placeholder: string
    disabled?: boolean
    icon?: any

    className: string
}

function InputField(props: InputFieldProps) {
    const { field, form, label, type, placeholder, disabled, className, icon } = props

    const { name } = field

    const touched = form.touched[field.name]
    const hasError = form.errors[field.name]
    const submittedError = hasError
    const touchedError = hasError && touched

    return (
        <Form.Item
            help={submittedError || touchedError ? hasError : false}
            validateStatus={submittedError || touchedError ? 'error' : ''}
        >
            {label && (
                <label htmlFor={name} className={`${className}-label`}>
                    {label}
                </label>
            )}
            <Row className={`${className}-input`} align={'middle'}>
                {icon && <span className={`${className}-input-icon`}>{icon}</span>}
                <Input
                    id={name}
                    className={`${className}-input-field`}
                    {...field}
                    placeholder={placeholder}
                    type={type}
                    disabled={disabled}
                    bordered={false}
                />
            </Row>
        </Form.Item>
    )
}

export default InputField
