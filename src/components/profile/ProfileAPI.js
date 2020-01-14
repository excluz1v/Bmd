import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { AddPostThunk, setProfileAC, getStatusThunk, updateStatusThunk, saveProfile } from '../../Redux/Profile-reducer';
import { withRouter } from 'react-router-dom';
import { getProfile } from '../../API/API';
import { compose } from 'redux';

class ProfileAPI extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.UserId;
        if (!userId) {

            userId = this.props.autorezedUserId
            if (!userId) {
                this.props.history.push('/login')
            }

        }
        getProfile(userId).then(response => {
            this.props.setProfileAC(response.data);
            this.props.getStatusThunk(userId);

        })
    };
    render() {
        return (
            <Profile {...this.props}
            />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage,
        status: state.profilePage.status,
        autorezedUserId: state.auth.id,
        isAuth: state.auth.IsAuth
    }
}

export default compose(connect(mapStateToProps, { AddPostThunk, setProfileAC, getStatusThunk, updateStatusThunk, saveProfile }),
    withRouter)(ProfileAPI)
