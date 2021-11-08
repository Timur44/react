import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage ,setTotalUsersCount, changeLoader} from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import Preloader from '../Preloader/Preloader';
class UserAPIComponent extends React.Component{
    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        this.props.changeLoader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`,
        {withCredentials:true}
        ).then(responce=>{
        this.props.changeLoader(false);   
        this.props.setUsers(responce.data.items);
        this.props.setTotalUsersCount(responce.data.totalCount);
        })
    }
    onPageChanged=pageNumber=>{
        this.props.changeLoader(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageSize}`,
        {withCredentials:true}
        
        ).then(responce=>{
        debugger;
        this.props.setUsers(responce.data.items)
        this.props.changeLoader(false);
    })
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
        ></Users></>
    }
}

let mapStatetoProps=(state)=>{
    return{
        users:state.usersReducer.users,
        pageSize:state.usersReducer.pageSize,
        totalUsersCount:state.usersReducer.totalUsersCount,
        currentPage:state.usersReducer.currentPage,
        isFetching:state.usersReducer.isFetching
    }
}



let UsersContainer=connect(mapStatetoProps,{
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    changeLoader
})(UserAPIComponent)

export default UsersContainer