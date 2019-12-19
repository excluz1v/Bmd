import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import * as axios from 'axios';
import Users from './Users';


class UsersAjax extends React.Component {
    componentDidMount() {
        this.props.isFetchingAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.isFetchingAC(false);
            this.props.setUsersAC(response.data.items);
            this.props.setTotalUserCountAC(response.data.totalCount);
        })
    };
    onPageChange = (pageNumber) => {
        this.props.setPageAC(pageNumber);
        this.props.isFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.isFetchingAC(false);
            this.props.setUsersAC(response.data.items);
        })
    }
    render() {
        return (
            <Users follow={this.props.followAC}
                unfollow={this.props.unfollowAC}
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                onPageChange={this.onPageChange}
                currentPage={this.props.currentPage}
                isFetching={this.props.isFetching}
            />
        )
    }
}



export default UsersAjax;
