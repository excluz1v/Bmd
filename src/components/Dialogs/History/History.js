import React from 'react';
import s from './../Dialogs.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../common/formTypes';
import { maxLengthCreator, required } from '../../../Utilits/Validators/Validators';

let maxLength = maxLengthCreator(100)

let HistoryForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='history' component={Textarea} validate={[maxLength, required]}/>
            <button ></button>
        </form>
    )
}

let HistoreFormRedux = reduxForm({ form: 'Chat' })(HistoryForm)
let Chat = (props) => {
    return <div className={`row ${s.chat}`}>{props.text}</div>
}

let History = (props) => {
    let DialogOutMessage = props.history.DialogsMessage.map((ele) => <Chat text={ele.message} />)

    let addNewMessage = (text) => {
        props.addMessage(text.history)
    }
    return (
        <div className='col-9'>
            <div className='row'>
                <div className={`${s.text} col-12`}>Name</div>
            </div>
            {DialogOutMessage}
            <HistoreFormRedux onSubmit={addNewMessage} />
        </div >
    )
}

export default History;