import moment from 'moment'

import { DatePicker, Form } from 'antd'

import './DateField.scss'

type DateFieldProps = {
    field: any
    form: any

    label: string
    placeholder: string
    disabled: boolean

    className: string
}

function DateField(props: DateFieldProps) {
    const { field, form, label, className } = props

    const { name, value } = field
    const { setFieldValue } = form

    const valueFormat = moment(value)

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
            <DatePicker
                allowClear={false}
                id={name}
                className={`${className}-input-field`}
                defaultValue={valueFormat || moment()}
                value={value || moment()}
                format={`DD/MM/YYYY`}
                onChange={(val) => setFieldValue(name, val)}
                bordered={false}
            />
        </Form.Item>
    )
}

export default DateField
