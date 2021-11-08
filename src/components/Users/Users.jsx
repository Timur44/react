
import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
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
                                debugger;
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`,{
                                    withCredentials:true,
                                    headers:{
                                        "API-KEY":"99c4ad40-9f28-463b-9b7f-7ae01e967559"
                                    }
                                }).then(responce=>{
                                    
                                    if(responce.data.resultCode===0){//подписка произошла
                                        props.unfollow(users.id)
                                    }
                                })
                            }
                        }>Unfollow</button> 
                        : <button onClick={
                            ()=>{
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`,{},{
                                    withCredentials:true,
                                    headers:{
                                        "API-KEY":"99c4ad40-9f28-463b-9b7f-7ae01e967559"
                                    }
                                }).then(responce=>{
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