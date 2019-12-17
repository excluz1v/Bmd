import React from 'react';
import s from './../Dialogs.module.css';
import 'bootstrap/dist/css/bootstrap.css';

let Chat = (props) => {
    return <div className={`row ${s.chat}`}>{props.text}</div>
}
let Text = React.createRef()
let History = (props) => {
    let DialogOutMessage = props.history.DialogsMessage.map((ele) => <Chat key ={ele.id} text={ele.message} />)
    let UpgradeHistoryText = (body) => {
        let ddd = Text.current.value;
        props.UpgradeHistoryText(ddd)
    }
    return (
        <div className='col-9'>
            <div className='row'>
                <div className={`${s.text} col-12`}>Name</div>
            </div>
            {DialogOutMessage}
            < textarea ref={Text} onChange={UpgradeHistoryText} value={props.history.NewHistoryText}></textarea>
            <button onClick={props.TextOut}></button>
        </div >
    )
}

export default History;