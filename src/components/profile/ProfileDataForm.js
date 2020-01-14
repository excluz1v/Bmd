import React from 'react';
import { createField, InputLogin, Textarea } from '../common/formTypes'
import { reduxForm } from 'redux-form';



let ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {createField('full Name', "fullName", [], InputLogin)}
        <b>lookingForAJob :</b>{createField('', "lookingForAJob", [], InputLogin, { type: "checkbox" })}
        <div><b>skills :</b> {createField('description', "lookingForAJobDescription", [], Textarea)}</div>
        <div><b>about me :</b> {createField('aboutMe', "aboutMe", [], Textarea)}</div>
        <div><b>Contacts :</b> {Object.keys(props.profile.profile.contacts).map(key => <div>
            {key} :   {createField(key, "contacts." + key, [], InputLogin)}
        </div>
        )}</div>
        <div><button>Save</button></div>
        { props.error ? <div>{props.error}</div> : undefined}
    </form>
}
let ProfileReduxForm = reduxForm({ form: 'ProfileInfo' })(ProfileDataForm)

export default ProfileReduxForm