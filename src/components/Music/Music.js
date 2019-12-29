import React from 'react';
import './Music.css';
import { AuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux';
import { connect } from 'react-redux';

let Music = () => {
    return (
        <div className='content col-7'>
            <div>Trac1</div>
            <div>Trac2</div>
            <div>Trac3</div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuth
    }
}

export let MusicContainer = compose(connect(mapStateToProps, {}),
    AuthRedirect)(Music)