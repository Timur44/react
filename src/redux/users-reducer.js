const FOLLOW_AC="FOLLOW_AC";
const UNFOLLOW_AC="UNFOLLOW_AC";
const SET_USERS="SET_USERS"
const SET_CURRENT_PAGE="SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING"
const DISABLE_BTN="DISABLE_BTN"
let initialState={
   users:[],
   pageSize:5,
   totalUsersCount:0,
   currentPage:1,
   isFetching:true,
   disableBtn:[]

};
const usersReducer=(state=initialState,action)=>{
    
    switch(action.type){
        case FOLLOW_AC:
            return{
                ...state,
                users:state.users.map(u=>{
                    if(u.id===action.userId){
                        return {...u,followed:true}
                    }
                    return u
                })
            };

        case UNFOLLOW_AC:
            return{
                ...state,
                users:state.users.map(u=>{
                    if(u.id===action.userId){
                        return {...u,followed:false}
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
        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching:action.isFetching
            };
        case DISABLE_BTN:
        
        return{
            ...state,
            disableBtn: action.disable 
            ? [...state.disableBtn,action.id]
            : state.disableBtn.filter(id=>id!=action.id)
            
        };
        
        default:
            return state;
    }

}

export default usersReducer;



export const follow=(userId)=>{
    return {
        type:FOLLOW_AC,userId
    }
}
export const unfollow=(userId)=>{
    return {
        type:UNFOLLOW_AC,userId
    }
}
export const setUsers=(users)=>{
    return {
        type:SET_USERS,users
    }
}
export const setCurrentPage=(currentPage)=>{
    return {
        type:SET_CURRENT_PAGE,currentPage
    }
}
export const setTotalUsersCount=(totalCount)=>{
    return {
        type:SET_TOTAL_USERS_COUNT,totalCount
    }
}
export const changeLoader=(isFetching)=>{
    return {
        type:TOGGLE_IS_FETCHING,isFetching
    }
}
export const disableBtn=(disable,id)=>{
    return {
        type:DISABLE_BTN,disable,id
    }
}