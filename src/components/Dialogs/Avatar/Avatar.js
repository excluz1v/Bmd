import React from 'react';
import s from './../Dialogs.module.css';


let Avatar = (props) => {


    let UserAvatar = props.ava.map(elem => <img key ={elem}alt='img' src={`${elem.img}`} />)



    return (
        <div className={`${s.avatar} col-4`}>{UserAvatar}</div>
    )
}

export default Avatar