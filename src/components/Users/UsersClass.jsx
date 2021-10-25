import axios from 'axios';
import React from 'react';
import u from './Users.module.css'
class UserClass extends React.Component{
    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`).then(responce=>{
            debugger
            this.props.setUsers(responce.data.items);
            this.props.setTotalUsersCount(responce.data.totalCount);
        })
    }

    render() {
        let pagesCount=Math.ceil(this.props.totalUsersCount/this.props.pageSize)
        let pages=[];
        for (let i = 1; i <=pagesCount; i++) {
            pages.push(i);
            
        }

        return <div>
            <div className={u.choice}>
                {pages.map(page=>{
                    return <span className={this.props.currentPage===page && u.pages}onClick={()=>{
                        this.props.setCurrentPage(page);
                        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count${this.props.pageSize}`).then(responce=>{
                        this.props.setUsers(responce.data.items)
        })
                    }}>{page}</span>
                })}
            </div>
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