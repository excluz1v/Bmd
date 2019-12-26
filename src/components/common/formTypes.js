import React from 'react'
import s from '../common/formTypes.module.css'
export const Textarea = ({ input, meta, ...props }) => {

    return (
        <div>
            <textarea  className = { meta.touched && meta.error && `${s.warning}`} {...props} {...input} />
            <div>
                {meta.error && meta.touched && <span className={`${s.error}`}>{meta.error}</span>}
            </div>

        </div>

    )

}