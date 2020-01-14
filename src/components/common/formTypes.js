import React from 'react'
import s from '../common/formTypes.module.css'
import { Field } from 'redux-form'


export const Textarea = ({ input, meta, ...props }) => {
    return (
        <div>
            <textarea className={meta.touched && meta.error && `${s.warning}`} {...props} {...input} />
            <div>
                {meta.error && meta.touched && <span className={`${s.error}`}>{meta.error}</span>}
            </div>
        </div>
    )
}

export const InputLogin = ({ input, meta, ...props }) => {
    return (
        <div>
            <input className={meta.touched && meta.error && `${s.warning}`} {...props} {...input} />
            <div>
                {meta.error && meta.touched && <span className={`${s.error}`}>{meta.error}</span>}
            </div>
        </div>
    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
    return <div>
        <Field placeholder={placeholder} name={name} validators={validators} component={component}
            {...props} />
        {text}
    </div>
}
