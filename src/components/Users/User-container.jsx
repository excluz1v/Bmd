import React from 'react';
import UsersApi from './UsersApi'
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, setPageAC, setTotalUserCountAC, isFetchingAC } from '../../Redux/users-reducer';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export const UserContainer = connect(mapStateToProps, {
    followAC,
    unfollowAC,
    setUsersAC,
    setPageAC,
    setTotalUserCountAC,
    isFetchingAC
})(UsersApi)
