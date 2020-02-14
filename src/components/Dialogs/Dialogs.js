import React from 'react';
import { FriendNameContainer } from './FriendName/FriendName-container';
import { HistoryContainer } from './History/History-container'
import { connect } from 'react-redux';
import { AuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux';



let Dialogs = () => {
    return (
        <div className='col-9 '>
            <div className='row ml-3'>
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

let DialogContainer = compose(connect(mapStateToProps, {}), AuthRedirect)(Dialogs)

export { DialogContainer as default }
