import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { UpgradePostTextCreateAction, AddPostCreateAction, setProfileAC } from '../../Redux/Profile-reducer';
import { withRouter } from 'react-router-dom';
import { getProfile } from '../../API/API';
import { compose } from 'redux';
import { getStatusThunk,updateStatusThunk } from '../../Redux/Profile-reducer'

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
        status:state.profilePage.status
    }
}

export default compose(connect(mapStateToProps, { UpgradePostTextCreateAction, AddPostCreateAction, setProfileAC, getStatusThunk,updateStatusThunk }),
    withRouter)(ProfileAPI)
