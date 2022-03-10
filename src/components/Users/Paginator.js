
import React from 'react';
import u from './Users.module.css'
let Paginator=(props)=>{
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
        </div>
}

export default Paginator