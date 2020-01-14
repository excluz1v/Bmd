import React, { useState } from 'react';
import s from './Profile.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Preloader from '../common/Preloader'
import { reduxForm, Field } from 'redux-form'
import { required, maxLengthCreator } from '../../Utilits/Validators/Validators'
import { Textarea } from '../common/formTypes'
import StatusWithHooks from './ProfileWithHucs'
import ProfileReduxForm from './ProfileDataForm'

let maxLength = maxLengthCreator(10)

let MessageForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <Field placeholder='enter your message' name='chat' component={Textarea} validate={[required, maxLength]} />
            <button className={`${s.btn}`} variant="primary">Add post</button>
        </form>
    )
}
let PostDiv = (props) => {
    return <div className="row">{props.message}</div>
}
let MessageFormRedux = reduxForm({ form: 'profilemessage' })(MessageForm)

const Profile = (props) => {
    let [editMode1, setEditMode] = useState(false)
    let Post = props.profile.WallPosts.map((el) => <PostDiv key={el} message={el.text} />)

    if (!props.profile.profile) {
        return <Preloader />
    }
    let addPostFunction = (text) => {
        props.AddPostThunk(text.chat)
    }
let onSubmit=(formData)=>{
    props.saveProfile(formData)
  
}

    return (
        <div className='content container col-7'>

            <StatusWithHooks {...props} status={props.status} />
            <MessageFormRedux onSubmit={addPostFunction} />
            {Post}
            {editMode1 ? <ProfileReduxForm onSubmit={onSubmit} {...props} /> : <ProfileData editMode1={editMode1} {...props} isAuth={props.isAuth} goToEditMode={() => { setEditMode(true) }} />}

        </div >
    )
}

export let Contacts = ({ ContKey, ContValue }) => {
    return <div><b>{ContKey}</b>: {ContValue}</div>
}

let ProfileData = (props) => {


    return <div>
        <div><b>FullName :</b> {props.profile.profile.fullName}</div>
        <div><b>Looking for a job :</b> {props.profile.profile.lookingForAJob ? "yes" : 'no'}</div>
        {props.profile.profile.lookingForAJob ?
            <div><b>description :</b> {props.profile.profile.lookingForAJobDescription}</div> : undefined
        }
        <div><b>about me :</b> {props.profile.profile.aboutMe }</div>
        <div><b>Contacts :</b> {Object.keys(props.profile.profile.contacts).map(key => {
            return <Contacts key={key} ContKey={key} ContValue={props.profile.profile.contacts[key]} />
        })}</div>
        <div><button onClick={props.goToEditMode}>Edit</button></div>
    </div>
}

export default Profile;

