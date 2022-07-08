import React from 'react';
import { connect } from 'react-redux';
import { unfollowThunkCreator,followThunkCreator,getUserThunkCreator, ActionTypes, FilterStateType, } from '../../redux/users-reducer';
import unfollow from "../../redux/users-reducer"
import follow from "../../redux/users-reducer"
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { getCurrentPage, getDisabledBtn, getIsFetching, getPageSize, getTotalUsersCount, getUsers, getUsersSuperSelector } from '../../redux/users-selectors';
import { AppState } from '../../redux/redux-store';
import { ThunkAction } from 'redux-thunk';

type MapStateToPropsType={
    totalUsersCount:number
    pageSize:number
    currentPage:number
    portionSize?:number
    disable:Array<any>
    users:Array<any>
    isFetching:boolean
    disableBtn:Array<number>,
    filter:{term:any,friend:any}

}

type MapDispatchToPropsType={

    unfollow:(userId: number)=>void
    follow:(userId: number)=>void
    unfollowThunkCreator:(id:number)=>(dispatch:any)=>ThunkAction<void,AppState,unknown,ActionTypes>
    followThunkCreator:(id:number)=>(dispatch:any)=>ThunkAction<void,AppState,unknown,ActionTypes>
  
    getUserThunkCreator:(page:number,size:number,filter:FilterStateType)=>ThunkAction<void,AppState,unknown,ActionTypes>
}
type OwnStateProps={
    title:string
}
type Props=MapStateToPropsType & MapDispatchToPropsType & OwnStateProps






 
class UsersContainer extends React.Component<Props>{
    componentDidMount(){
        this.props.getUserThunkCreator(this.props.currentPage,this.props.pageSize,this.props.filter)
        
    }
    onPageChanged=(pageNumber:number,filter:FilterStateType)=>{
        this.props.getUserThunkCreator(pageNumber,this.props.pageSize,filter)
    }
    onFilterChanged=(filter:FilterStateType)=>{
        this.props.getUserThunkCreator(this.props.currentPage,this.props.pageSize,filter)
    }

    render() {
        return<>
            {this.props.isFetching ? <Preloader></Preloader>: null}
            <Users 
                filter={this.props.filter}
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
                onFilterChanged={this.onFilterChanged}
            ></Users>
        </>
    }
}

let mapStatetoProps=(state:AppState):MapStateToPropsType=>{
    return{
        users:getUsersSuperSelector(state),
        pageSize:getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        disable:getDisabledBtn(state),
        disableBtn:state.usersReducer.disableBtn,
        filter:state.usersReducer.filter
    }
}


type IProps={
    store:any
}

export default compose(
    connect(mapStatetoProps,{
        follow,
        unfollow,
        unfollowThunkCreator,
        followThunkCreator,
        getUserThunkCreator
    }),
    withAuthRedirect
)(UsersContainer) as React.ComponentType<IProps>;