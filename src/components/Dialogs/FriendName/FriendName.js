import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';





let FriendName = (props) => {

    let DialogItem = (props) => {
        let path = '/Dialogs/FriendName/' + props.id
        return (
            <div className='row'>
                <div className={`${s.avatar} col-6`}><img alt ='img'src={`${props.ava}`} /></div>
                <div className={`${s.nick} col-6`}><NavLink to={path}>{props.name}</NavLink></div>
            </div>
        )
    }
    let DialogsOutdata = props.history.DialogsData.map((ele) => <DialogItem ava={ele.img} name={ele.name} />)

    return (
        <div className={`col-3 ${s.conversation}`}>
            {DialogsOutdata}
        </div>
    )
}

export default FriendName;