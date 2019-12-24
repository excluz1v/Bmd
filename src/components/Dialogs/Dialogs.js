import React from 'react';
import { FriendNameContainer } from './FriendName/FriendName-container';
import { HistoryContainer } from './History/History-container'



let Dialogs = (props) => {
    return (
        <div className='container col-7 content'>
            <div className='row'>
                <FriendNameContainer />
                <HistoryContainer  />
            </div>
        </div >
    )
}

export default Dialogs;
