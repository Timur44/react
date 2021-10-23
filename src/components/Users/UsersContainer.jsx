import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import UserClass from './UsersClass';

let mapStatetoProps=(state)=>{
    return{
        users:state.usersReducer.users
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
        } 
    }
}

let UsersContainer=connect(mapStatetoProps,mapDispatchToProps)(UserClass)

export default UsersContainer