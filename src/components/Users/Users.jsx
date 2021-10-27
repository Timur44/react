
import React from 'react';
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
                        <img src={users.photoUrl!=null ? users.photoUrl : "http://avotarov.ru/picture/avatar-100/kartinki/924.jpg" } alt="" />
                    </div>
                    <div>
                        {users.followed ? <button onClick={()=>{props.follow(users.id)}}>Unfollow</button> : <button onClick={()=>{props.unfollow(users.id)}}>Follow</button>}
                        
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