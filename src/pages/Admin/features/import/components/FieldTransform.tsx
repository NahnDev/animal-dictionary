import { FastField, Formik, Form } from 'formik'
import { useEffect, useState } from 'react'
import ButtonField from '../../../../../custom-fields/BtnSubmit'
import SelectField from '../../../../../custom-fields/SelectField'
import { ScienceInfo } from '../../../../../types/ScienceInfo'
import * as Yup from 'yup'
import { Input } from 'antd'

export default function FieldTransform(props: {
    source: string[]
    options: ScienceInfo[]
    onConfirm: (value: { [key: string]: string }) => any
    addHandle: (value: Omit<ScienceInfo, '_id'>) => any
}) {
    const [value, setValue] = useState('')
    const [create, setCreate] = useState('')

    useEffect(() => {
        if (create) {
            props.addHandle({ name: create })
        }
    }, [create])

    const handleSubmit = (value: { [key: string]: ScienceInfo }) => {}
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'bottom' }}>
                <input
                    type="text"
                    style={{ borderBottom: '1px solid black', margin: '0.5em' }}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button
                    onClick={() => {
                        props.addHandle({ name: value })
                        setValue('')
                    }}
                >
                    Add new
                </button>
            </div>
            <Formik
                initialValues={props.source.reduce((pre, cur) => {
                    let idx = 0
                    props.options.forEach((option, index) => {
                        if (option.name === cur) idx = index
                    })
                    if (!props.options[idx]) idx = 0
                    return { ...pre, [cur]: (props.options[idx] || { _id: '' })._id }
                }, {})}
                onSubmit={props.onConfirm}
            >
                {(formikProps) => {
                    return (
                        <Form>
                            {props.source.map((key, index) => (
                                <FastField
                                    component={SelectField}
                                    label={
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'start',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            <div
                                                className="button"
                                                onClick={() => {
                                                    setCreate(key)
                                                }}
                                                style={{
                                                    margin: '0.5em',
                                                    padding: '0.2em',
                                                    borderRadius: '0.5em',
                                                }}
                                            >
                                                + Add new
                                            </div>
                                            {key}
                                        </div>
                                    }
                                    name={key}
                                    key={index}
                                    options={props.options}
                                ></FastField>
                            ))}
                            <ButtonField
                                className=""
                                type="submit"
                                content={'Confirm'}
                            ></ButtonField>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}
