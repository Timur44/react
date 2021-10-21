import React from 'react';
import u from './Users.module.css'
let Users=(props)=>{
        if(props.users.length===0){
        props.setUsers([{photoUrl:'http://avotarov.ru/picture/avatar-100/kartinki/901.jpg',followed:false,name:"Frol",id:1,status:"What's wrong",location:{city:"Podolsk",country:"Russia"}},
        {photoUrl:'http://avotarov.ru/picture/avatar-100/kartinki/901.jpg',followed:true,name:"Nikita",id:2,status:"What's wrong1",location:{city:"Podolsk1",country:"Russia1"}},
        {photoUrl:'http://avotarov.ru/picture/avatar-100/kartinki/901.jpg',followed:false,name:"Lexa",id:3,status:"What's wrong2",location:{city:"Podolsk2",country:"Russia2"}},
        {photoUrl:'http://avotarov.ru/picture/avatar-100/kartinki/901.jpg',followed:true,name:"Kirill",id:4,status:"What's wrong3",location:{city:"Podolsk3",country:"Russia3"}},
        {photoUrl:'http://avotarov.ru/picture/avatar-100/kartinki/901.jpg',followed:false,name:"Matwey",id:5,status:"What's wrong4",location:{city:"Podolsk4",country:"Russia4"}}],
    )}
    return <div>
        {props.users.map(users=><div className={u.flex} key={users.id}>
            <span >
                <div>
                    <img src={users.photoUrl} alt="" />
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
                    <div>{users.location.city}</div>
                    <div>{users.location.country}</div>
                </span>
            </span>
            
        </div>)}
    </div>
}

export default Users