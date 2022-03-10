
import React from 'react';
import { NavLink } from 'react-router-dom';
import Paginator from './Paginator';
import u from './Users.module.css'
let Users=(props)=>{
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