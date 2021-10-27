import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, currentPageAC ,setTotalUsersCountAC, change_isFething} from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import preloader from '../../images/1480.gif'
import u from './Users.module.css'
import Preloader from '../Preloader/Preloader';
class UserAPIComponent extends React.Component{
    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        this.props.changeLoader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`).then(responce=>{
        this.props.changeLoader(false);   
        this.props.setUsers(responce.data.items);
            this.props.setTotalUsersCount(responce.data.totalCount);
        })
    }
    onPageChanged=pageNumber=>{
        this.props.changeLoader(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageSize}`).then(responce=>{
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
        },
        changeLoader:(isFetching)=>{
            dispatch(change_isFething(isFetching))
        }
    }
}

let UsersContainer=connect(mapStatetoProps,mapDispatchToProps)(UserAPIComponent)

export default UsersContainer