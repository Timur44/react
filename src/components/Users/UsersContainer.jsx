import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage ,setTotalUsersCount, changeLoader,disableBtn,getUserThunkCreator,unfollowThunkCreator,followThunkCreator} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import { changePage, getUsers, usersAPI } from '../../api/api';
class UserAPIComponent extends React.Component{
    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        this.props.getUserThunkCreator(this.props.currentPage,this.props.pageSize)
    }
    onPageChanged=pageNumber=>{
        this.props.getUserThunkCreator(pageNumber,this.props.pageSize)
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader></Preloader>: null}
        <Users 
            totalUsersCount={this.props.totalUsersCount} 
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            disable={this.props.disable}
            disableBtn={this.props.disableBtn}
            unfollowThunkCreator={this.props.unfollowThunkCreator}
            followThunkCreator={this.props.followThunkCreator}
        ></Users></>
    }
}

let mapStatetoProps=(state)=>{
    return{
        users:state.usersReducer.users,
        pageSize:state.usersReducer.pageSize,
        totalUsersCount:state.usersReducer.totalUsersCount,
        currentPage:state.usersReducer.currentPage,
        isFetching:state.usersReducer.isFetching,
        disable:state.usersReducer.disableBtn
    }
}



let UsersContainer=connect(mapStatetoProps,{
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    changeLoader,
    disableBtn,
    getUserThunkCreator,
    unfollowThunkCreator,
    followThunkCreator
})(UserAPIComponent)

export default UsersContainer