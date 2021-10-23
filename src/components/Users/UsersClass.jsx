import axios from 'axios';
import React from 'react';
import u from './Users.module.css'
class UserClass extends React.Component{
    constructor(props){
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce=>{
            this.props.setUsers(responce.data.items)
        })
    }

    

    render() {
        return <div>
            {this.props.users.map(users=><div className={u.flex} key={users.id}>
                <span >
                    <div>
                        <img src={users.photoUrl!=null ? users.photoUrl : "http://avotarov.ru/picture/avatar-100/kartinki/924.jpg" } alt="" />
                    </div>
                    <div>
                        {users.followed ? <button onClick={()=>{this.props.follow(users.id)}}>Unfollow</button> : <button onClick={()=>{this.props.unfollow(users.id)}}>Follow</button>}
                        
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
}

export default UserClass;