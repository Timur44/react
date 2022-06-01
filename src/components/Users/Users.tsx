
import React from 'react';
import { NavLink } from 'react-router-dom';
import  UnfollowActionType  from '../../redux/users-reducer';
import Paginator from './Paginator';
import u from './Users.module.css'
type Props={
    totalUsersCount:number
    pageSize:number
    currentPage:number
    onPageChanged:(page:number)=>void
    portionSize?:number
    unfollowThunkCreator:(id:number)=>void
    followThunkCreator:(id:number)=>void
    disable:Array<any>
    users:Array<any>
    unfollow:(userId:number)=>void
    follow:(userId:number)=>void
    disableBtn:Array<number>
   
}
let Users:React.FC<Props>=(props)=>{
    return <div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}></Paginator>
            {props.users.map(users=><div className={u.flex} key={users.id}>
                <span >
                    <div>
                        <NavLink to={'/profile/'+ users.id}>
                            <img src={users.photoUrl!=null ? users.photoUrl : "http://avotarov.ru/picture/avatar-100/kartinki/924.jpg" } alt="" />
                        </NavLink>
                       
                    </div>
                    <div>
                        {users.followed 
                        ? <button disabled={props.disable.some(id=>id===users.id)} onClick={
                            ()=>{
                               props.unfollowThunkCreator(users.id);
                            }
                        }>Unfollow</button> 
                        : <button disabled={props.disable.some(id=>id===users.id)} onClick={
                            ()=>{
                                props.followThunkCreator(users.id);
                            }
                        }>Follow</button>}
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>{users.name}</div>
                        <div>{users.status}</div>
                    </span>
                    <span>
                        <div>{"users.location.city"}</div>
                        <div>{"users.location.country"}</div>
                    </span>
                </span>
                
            </div>)}
        </div>
}

export default Users