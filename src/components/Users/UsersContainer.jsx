import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage ,setTotalUsersCount, changeLoader} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import { changePage, getUsers, usersAPI } from '../../api/api';
class UserAPIComponent extends React.Component{
    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        this.props.changeLoader(true);
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data=>{
        this.props.changeLoader(false);   
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
        debugger;
        })
    }
    onPageChanged=pageNumber=>{
        this.props.changeLoader(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.changePage(pageNumber,this.props.pageSize).then(data=>{
        debugger;
        this.props.setUsers(data.items)
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