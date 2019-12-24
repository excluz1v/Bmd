import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Users from './Users';
import { connect } from 'react-redux'
import { followAC, unfollowAC, buttonIsClickededAC, setPageAC, getUsersThunkCreator, setPageThunkCreator, ClickFollowThunkCreator, ClickUnFollowThunkCreator } from '../../Redux/users-reducer';

class UsersAjax extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    };
    onPageChange = (pageNumber) => {
        this.props.setPageAC(pageNumber);
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }
    render() {

        return (
            <Users {...this.props} onPageChange={this.onPageChange} />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        buttonIsClicked: state.usersPage.buttonIsClicked,
    }
}
export const UserContainer = connect(mapStateToProps, {
    buttonIsClickededAC, unfollowAC,followAC,
    setPageAC, getUsersThunkCreator,
    setPageThunkCreator, ClickFollowThunkCreator,
    ClickUnFollowThunkCreator
})(UsersAjax)
