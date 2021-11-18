import React from "react";
import {connect} from "react-redux"
import Users from "./Users";
import {
    follow,
    setCurrentPage,toggleIsFollowingProgress,
    unfollow, getUsers
} from "../../redux/users_reducer";
import preloader from '../../imgg/Spinner-1s-200px.svg';
import { compose } from "redux";
import { getUser,getPageSize,getTotalUsersCount,
    getCurrentPage,getFollowingInProgress } from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
       this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (PageNumber) => {
        this.props.getUsers(this.props.pageSize, PageNumber);
    }

    render() {
        return <>
            {this.props.isFetching ? <img src={preloader}/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUser(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, 
        toggleIsFollowingProgress, getUsers
    })
)(UsersContainer)
