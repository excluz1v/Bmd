import React from 'react';
import s from './Profile.module.css';
import Post1 from './Post1/post1';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';



let PostDiv = (props) => {
    return <div className="row">{props.tttt}</div>
}

let Text = React.createRef();
const Profile = (props) => {
    let Post = props.profile.WallPosts.map((el) => <PostDiv key ={el.id} tttt={el.text} />)
    let SendTextArea = (text) => {
        let ddd = Text.current.value
        props.SendTextArea(ddd)}

    return (

        <div className='content container col-7'>

            <Post1 message='Hi there' smile='good' />

            {Post}
            <textarea ref={Text} onChange={SendTextArea} value={props.profile.NewPostText}></textarea>
            <Button className={`${s.btn}`} onClick={props.TextOut} variant="primary">Add post</Button>

        </div>
    )
}
export default Profile;