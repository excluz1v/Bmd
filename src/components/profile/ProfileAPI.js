import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { savePhoto, AddPostThunk, setProfileAC, getStatusThunk, updateStatusThunk, saveProfile } from '../../Redux/Profile-reducer';
import { withRouter } from 'react-router-dom';
import { getProfile } from '../../API/API';
import { compose } from 'redux';

class ProfileAPI extends React.Component {

    refreshProfile() {
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
    }
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
  
        if (this.props.match.params.UserId != prevProps.match.params.UserId) {
            this.refreshProfile()
        }
    }
    render() {
       
        return (
            <Profile {...this.props} savePhoto={this.props.savePhoto} isOwner={!!this.props.match.params.UserId}
            />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage,
        status: state.profilePage.status,
        autorezedUserId: state.auth.id,
        isAuth: state.auth.IsAuth,
        
    }
}



export default compose(connect(mapStateToProps, { savePhoto, AddPostThunk, setProfileAC, getStatusThunk, updateStatusThunk, saveProfile }),
    withRouter)(ProfileAPI)
