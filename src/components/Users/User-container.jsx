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
// let mapDispatchToProps = (dispatch) => {

//     return {
//         follow: (UserId) => {
//             dispatch(followAC(UserId));
//         },
//         unfollow: (UserId) => {
//             dispatch(unfollowAC(UserId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setPage: (currentPage) => {
//             dispatch(setPageAC(currentPage))
//         },
//         setTotalUserCount: (totalCount) => {
//             dispatch(setTotalUserCountAC(totalCount))
//         },
//         setisFetching: (isload) => {
//             dispatch(isFetchingAC(isload))
//         }
//     }
// }
export const UserContainer = connect(mapStateToProps, {
    followAC,
    unfollowAC,
    setUsersAC,
    setPageAC,
    setTotalUserCountAC,
    isFetchingAC
})(UsersApi)
