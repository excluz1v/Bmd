import React from 'react';
import s from './Profile.module.css';
import Post1 from './Post1/post1';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Preloader from '../common/Preloader'
import { Redirect } from 'react-router-dom';


let PostDiv = (props) => {
    return <div className="row">{props.message}</div>
}

let Text = React.createRef();
const Profile = (props) => {
    let Post = props.profile.WallPosts.map((el) => <PostDiv key={el.id} message={el.text} />)
    let SendTextArea = (text) => {
        let ddd = Text.current.value
        props.UpgradePostTextCreateAction(ddd)
    }
    if (!props.profile.profile) {
        return <Preloader />
    }

    return (
        <div className='content container col-7'>
            {/* <Post1 message='Hi there' smile='good' /> */}
            {Post}
            <textarea ref={Text} onChange={SendTextArea} value={props.profile.NewPostText}></textarea>
            <Button className={`${s.btn}`} onClick={props.AddPostCreateAction} variant="primary">Add post</Button>
            <div>
                <div><img src={props.profile.profile.photos.small} /></div>
                <span>Ищу работу?: {props.profile.profile.lookingForAJobDescription}</span>
                <br />
                <span>О себе?: {props.profile.profile.aboutMe}</span>
            </div>
        </div >
    )
}
export default Profile;