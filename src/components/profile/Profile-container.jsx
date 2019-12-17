import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux'
import { UpgradePostTextCreateAction, AddPostCreateAction } from '../../Redux/Profile-reducer'

let mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        SendTextArea: (text) => {
            console.log()
            dispatch(UpgradePostTextCreateAction(text));
        },
        TextOut: () => {
            dispatch(AddPostCreateAction());
        }
    }
}
export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
