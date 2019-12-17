import React from 'react';
import FriendName from './FriendName/FriendName';
import {HistoryContainer} from './History/History-container'



let Dialogs = (props) => {


    return (
        <div className='container col-7 content'>
            <div className='row'>
                <FriendName post={props.post} />
                <HistoryContainer post={props.post} dispatch={props.dispatch} />

            </div>
        </div >
    )
}

export default Dialogs;
