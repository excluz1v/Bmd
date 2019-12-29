import React from 'react';
import { FriendNameContainer } from './FriendName/FriendName-container';
import { HistoryContainer } from './History/History-container'
import { connect } from 'react-redux';
import { AuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux';



let Dialogs = (props) => {
    return (
        <div className='container col-7 content'>
            <div className='row'>
                <FriendNameContainer />
                <HistoryContainer />
            </div>
        </div >
    )
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuth
    }
}

export let DialogsContainer = compose(connect(mapStateToProps, {}), AuthRedirect)(Dialogs)


