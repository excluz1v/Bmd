// import React from 'react';
// import UsersApi from './UsersApi'
// import { connect } from 'react-redux'
// import { followAC, unfollowAC, setUsersAC, setPageAC, setTotalUserCountAC, isFetchingAC, buttonIsClickededAC, getUsersThunkCreator, setPageThunkCreator, ClickFollowThunkCreator, ClickUnFollowThunkCreator } from '../../Redux/users-reducer';
// import { AuthRedirect } from '../../hoc/AuthRedirect'
// import { compose } from 'redux';

// let mapStateToProps = (state) => {
//     return {

//     }
// }
// // export default compose (connect(mapStateToProps, {
// //     followAC,    unfollowAC,
// //     setUsersAC,    setPageAC,
// //     setTotalUserCountAC,    isFetchingAC,
// //     buttonIsClickededAC,    getUsersThunkCreator,
// //     setPageThunkCreator,    ClickFollowThunkCreator,
// //     ClickUnFollowThunkCreator
// // }), AuthRedirect)(UsersApi)
// let UserRedirectComponent = AuthRedirect(UsersApi)
// export const UserContainer = connect(mapStateToProps, {
//     followAC,    unfollowAC,
//     setUsersAC,    setPageAC,
//     setTotalUserCountAC,    isFetchingAC,
//     buttonIsClickededAC,    getUsersThunkCreator,
//     setPageThunkCreator,    ClickFollowThunkCreator,
//     ClickUnFollowThunkCreator
// })(UserRedirectComponent)
