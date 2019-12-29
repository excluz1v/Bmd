import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Users from './Users';
import { connect } from 'react-redux'
import { followAC, unfollowAC, buttonIsClickededAC, setPageAC, getUsersThunkCreator, setPageThunkCreator, ClickFollowThunkCreator, ClickUnFollowThunkCreator } from '../../Redux/users-reducer';
import {usersSelector,upageSizeSelector,totalUsersCountSelector,currentPageSelector, isFetchingSelector,buttonIsClickedSelector} from '../../Redux/usersSelectors'


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
        users: usersSelector(state),
        pageSize: upageSizeSelector(state),
        totalUsersCount: totalUsersCountSelector(state),
        currentPage: currentPageSelector(state),
        isFetching: isFetchingSelector(state),
        buttonIsClicked: buttonIsClickedSelector(state),
    }
}
export const UserContainer = connect(mapStateToProps, {
    buttonIsClickededAC, unfollowAC,followAC,
    setPageAC, getUsersThunkCreator,
    setPageThunkCreator, ClickFollowThunkCreator,
    ClickUnFollowThunkCreator
})(UsersAjax)
