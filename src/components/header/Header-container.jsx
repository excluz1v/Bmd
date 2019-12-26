import React from 'react';
import './Header.css';
import Header from './Header';
import { connect } from 'react-redux'
import { SET_USER_DATA_AC } from '../../Redux/auth-reducer';
import {authUser} from '../../API/API'


class HeaderContainer extends React.Component {
    componentDidMount() {
        authUser().then(data => {
            if (data.resultCode === 0) {
                this.props.SET_USER_DATA_AC(data.data)
            }
        })
    }
    render() {
        return (
            <Header {...this.props} />
        )
    }
}
let mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
)
export default connect(mapStateToProps, { SET_USER_DATA_AC })(HeaderContainer)