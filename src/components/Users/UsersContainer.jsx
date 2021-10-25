import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, currentPageAC ,setTotalUsersCountAC} from '../../redux/users-reducer';
import UserClass from './UsersClass';

let mapStatetoProps=(state)=>{
    return{
        users:state.usersReducer.users,
        pageSize:state.usersReducer.pageSize,
        totalUsersCount:state.usersReducer.totalUsersCount,
        currentPage:state.usersReducer.currentPage
    }
}

let mapDispatchToProps=(dispatch)=>{
    return {
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(currentPage)=>{
            dispatch(currentPageAC(currentPage))
        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

let UsersContainer=connect(mapStatetoProps,mapDispatchToProps)(UserClass)

export default UsersContainer