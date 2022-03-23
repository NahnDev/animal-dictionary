import { Form, Select } from 'antd'

type SelectFieldProps = {
    field: any
    form: any

    type: string
    label: string
    options: Array<any>
    placeholder: string
    disabled: boolean

    className: string
}

const { Option } = Select

function SelectField(props: SelectFieldProps) {
    const { field, form, options, label, disabled, className } = props

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
                className={`${className}-input-field`}
                defaultValue={[]}
                onChange={handleSelectedOptionChange}
            >
                {options.map((value) => {
                    return (
                        <Option key={value._id} value={value._id}>
                            {value.user.name}
                        </Option>
                    )
                })}
            </Select>
        </Form.Item>
    )
}

export default SelectField
