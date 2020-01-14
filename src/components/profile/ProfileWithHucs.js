import React, { useState, useEffect } from 'react';
import usersImg from '../Default-img/user-logo.png';
import s from './Profile.module.css'


const StatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let activateEditMode = () => {
        setEditMode(true)
    }
    let deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatusThunk(status)
    }

    let [status, setStatus] = useState(props.status)
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let addPhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div>{
                !editMode ?
                    <div>
                        <span onDoubleClick={activateEditMode}>{props.status || 'Empty status'}</span>
                    </div> : undefined}
                {editMode ? <div>
                    <input autoFocus onChange={onStatusChange} onBlur={deActivateEditMode} value={status}></input>
                </div> : undefined}
                <div></div>
            </div>
            <p></p>
            <p></p>
            <div>
                <img src={props.profile.profile.photos.large || usersImg} className={s.largePhoto} alt='img' />
                {props.isOwner ? undefined : <input type='file' onChange={addPhoto}></input>}
            </div>
        </div>
    )
}
export default StatusWithHooks