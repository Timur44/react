const FOLLOW_AC="FOLLOW_AC";
const UNFOLLOW_AC="UNFOLLOW_AC";
const SET_USERS="SET_USERS"
const SET_CURRENT_PAGE="SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT"
let initialState={
   users:[],
   pageSize:5,
   totalUsersCount:0,
   currentPage:1
};
const usersReducer=(state=initialState,action)=>{
    
    switch(action.type){
        case FOLLOW_AC:
            return{
                ...state,
                users:state.users.map(u=>{
                    if(u.id===action.userId){
                        return {...u,followed:false}
                    }
                    return u
                })
            };

        case UNFOLLOW_AC:
            return{
                ...state,
                users:state.users.map(u=>{
                    if(u.id===action.userId){
                        return {...u,followed:true}
                    }
                    return u
                })
            };
        case SET_USERS:
            return{
                ...state,
               users:[...action.users]
            };
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage:action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return{
                ...state,
                totalUsersCount:54
            };
        default:
            return state;
    }

}

export default usersReducer;



export const followAC=(userId)=>{
    return {
        type:FOLLOW_AC,userId
    }
}
export const unfollowAC=(userId)=>{
    return {
        type:UNFOLLOW_AC,userId
    }
}
export const setUsersAC=(users)=>{
    return {
        type:SET_USERS,users
    }
}
export const currentPageAC=(currentPage)=>{
    return {
        type:SET_CURRENT_PAGE,currentPage
    }
}
export const setTotalUsersCountAC=(totalCount)=>{
    return {
        type:SET_TOTAL_USERS_COUNT,totalCount
    }
}