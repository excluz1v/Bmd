import React from 'react';
import s from './Profile.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Preloader from '../common/Preloader'
import Status from './Status'
import { reduxForm, Field } from 'redux-form'
import { required, maxLengthCreator } from '../../Utilits/Validators/Validators'
import {Textarea} from '../common/formTypes'

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
    let Post = props.profile.WallPosts.map((el) => <PostDiv message={el.text} />)

    if (!props.profile.profile) {
        return <Preloader />
    }
    let addPostFunction = (text) => {
        props.AddPostThunk(text.chat)
    }
    return (
        <div className='content container col-7'>

            <Status {...props} status={props.status} />
            <MessageFormRedux onSubmit={addPostFunction} />
            {Post}
        </div >
    )
}
export default Profile;

