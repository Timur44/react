
import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { followUser, unfollowUser, usersAPI } from '../../api/api';
import u from './Users.module.css'
let Users=(props)=>{
    let pagesCount=Math.ceil(props.totalUsersCount/props.pageSize)
    let pages=[];
    for (let i = 1; i <=pagesCount; i++) {
        pages.push(i);
        
    }

    return <div>
            <div className={u.choice}>
                {pages.map(page=>{
                    return <span className={props.currentPage===page && u.pages}onClick={()=>{props.onPageChanged(page)}}>{page}</span>
                })}
            </div>
            
            {props.users.map(users=><div className={u.flex} key={users.id}>
                <span >
                    <div>
                        <NavLink to={'/profile/'+ users.id}>
                            <img src={users.photoUrl!=null ? users.photoUrl : "http://avotarov.ru/picture/avatar-100/kartinki/924.jpg" } alt="" />
                        </NavLink>
                       
                    </div>
                    <div>
                        {users.followed 
                        ? <button onClick={
                            
                            ()=>{
                               usersAPI.unfollowUser(users.id).then(responce=>{
                                    
                                    if(responce.data.resultCode===0){//подписка произошла
                                        props.unfollow(users.id)
                                    }
                                })
                            }
                        }>Unfollow</button> 
                        : <button onClick={
                            ()=>{
                                usersAPI.followUser(users.id).then(responce=>{
                                    if(responce.data.resultCode===0){//подписка произошла
                                        props.follow(users.id)
                                    }
                                })
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