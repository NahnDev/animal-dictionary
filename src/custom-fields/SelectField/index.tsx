import { Form, Select } from 'antd'

type SelectFieldProps = {
    field: any
    form: any

    type: string
    label: string
    options: Array<any>
    placeholder: string

    className: string
}

const { Option } = Select

function SelectField(props: SelectFieldProps) {
    const { field, form, options, label, className } = props

    const { name } = field

    const touched = form.touched[field.name]
    const hasError = form.errors[field.name]

    const submittedError = hasError
    const touchedError = hasError && touched

    const handleSelectedOptionChange = (selectedOption: any) => {
        const changeEvent = {
            target: {
                name: name,
                value: selectedOption,
            },
        }

        field.onChange(changeEvent)
    }

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
            <Select
                id={name}
                {...field}
                bordered={false}
                className={`${className}-input`}
                defaultValue={[]}
                onChange={handleSelectedOptionChange}
            >
                {options.map((value, index) => {
                    return (
                        <Option
                            key={value._id || `options-${index}`}
                            value={value._id || value.value}
                        >
                            {value.name || value.value}
                        </Option>
                    )
                })}
            </Select>
        </Form.Item>
    )
}

export default SelectField
