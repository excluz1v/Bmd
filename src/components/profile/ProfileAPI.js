import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { AddPostThunk, setProfileAC, getStatusThunk, updateStatusThunk } from '../../Redux/Profile-reducer';
import { withRouter } from 'react-router-dom';
import { getProfile } from '../../API/API';
import { compose } from 'redux';

class ProfileAPI extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.UserId;
        if (!userId) { userId = 5475 }
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
        status: state.profilePage.status
    }
}

export default compose(connect(mapStateToProps, { AddPostThunk, setProfileAC, getStatusThunk, updateStatusThunk }),
    withRouter)(ProfileAPI)
