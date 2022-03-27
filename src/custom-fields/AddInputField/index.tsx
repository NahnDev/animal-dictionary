import { Form, Input, Row } from 'antd'
import { useState } from 'react'

type AddInputFieldProps = {
    field?: any
    form?: any

    label?: string
    placeholder: string
    disabled?: boolean

    className: string
}

function AddInputField(props: AddInputFieldProps) {
    const { field, form, label, placeholder, disabled, className } = props
    const { name, value } = field
    console.log(value)

    const [listInput, setListInput] = useState<Array<string>>(value)

    const touched = form.touched[field.name]
    const hasError = form.errors[field.name]
    const submittedError = hasError
    const touchedError = hasError && touched

    const handleAddField = (event: any) => {
        event.preventDefault()
        setListInput((listInput) => [...listInput, ''])
    }

    const changeValueField = (str: string, index: number) => {
        const tempListInput = listInput

        if (str) {
            tempListInput[index] = str
            setListInput(tempListInput)
            form.setFieldValue(name, tempListInput)
        }
    }

    return (
        <Form.Item
            help={submittedError || touchedError ? hasError : false}
            validateStatus={submittedError || touchedError ? 'error' : ''}
            className={`${className}`}
        >
            <Row align="middle">
                {label && (
                    <label htmlFor={name} className={`${className}-label`}>
                        {label}
                    </label>
                )}
                <button className={`${className}-btn`} onClick={(e) => handleAddField(e)}>
                    Add Field
                </button>
            </Row>
            {listInput.length > 0 &&
                listInput.map((value, index) => {
                    return (
                        <Row
                            className={`${className}-input`}
                            align={'middle'}
                            key={`list-input-${name}-${index}`}
                        >
                            <Input
                                defaultValue={value}
                                id={name}
                                className={`${className}-input-field`}
                                placeholder={placeholder}
                                type={'text'}
                                disabled={disabled}
                                bordered={false}
                                onChange={(e) => changeValueField(e.target.value, index)}
                            />
                        </Row>
                    )
                })}
        </Form.Item>
    )
}

export default AddInputField
