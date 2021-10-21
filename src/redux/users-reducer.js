const FOLLOW_AC="FOLLOW_AC";
const UNFOLLOW_AC="UNFOLLOW_AC";
const SET_USERS="SET_USERS"
let initialState={
   users:[]
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
               users:[...state.users,...action.users]
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