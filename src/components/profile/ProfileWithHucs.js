import React, { useState, useEffect } from 'react';


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

    return (
        <div>
            <div>{
                !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'Empty status'}</span>
                </div>}
                {editMode && <div>
                    <input autoFocus onChange={onStatusChange} onBlur={deActivateEditMode} value={status}></input>
                </div>}
            </div>
            <p></p>
            <p></p>
            <div><img src={props.profile.profile.photos.small} alt='img' /></div>
            <span>Ищу работу?: {props.profile.profile.lookingForAJobDescription}</span>
            <br />
            <span>О себе?: {props.profile.profile.aboutMe}</span>
        </div>
    )
}
export default StatusWithHooks