import React from 'react';
import './Settings.css';
import { connect } from 'react-redux';
import { AuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux';
import {authSelector} from '../../Redux/usersSelectors'

let Settings = () => {
    return (
        <div className='container col-7 content'>
            <div>Set1</div>
            <div>Set2</div>
            <div>Set3</div>
            <div>Set4</div>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        auth: authSelector(state)
    }
}
export let SettingsContainer = compose(connect(mapStateToProps, {}),
    AuthRedirect)(Settings)


