import { usersAPI } from "../api/api";

const SET_USER_DATA="SET_USER_DATA";
const TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING"

let initialState={
    userId:null,
    email:null,
    login:null,
    isFetching:false,
    isAuth:false
};
const authReducer=(state=initialState,action)=>{
    
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data,
                isAuth:true
            };
        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching:action.isFetching
            };

        
        default:
            return state;
    }

}

export default authReducer;



export const setUserData=(userId,email,login)=>{
    return {
        type:SET_USER_DATA,data:{userId,email,login}
    }
}
export const changeLoader=(isFetching)=>{
    return {
        type:TOGGLE_IS_FETCHING,isFetching
    }
}



export const loginThunkCreator=()=>{
    return (dispatch)=>{
        usersAPI.login().then(responce=>{
            dispatch(changeLoader(true));
            if(responce.data.resultCode===0){
                dispatch(changeLoader(false));
                let {id,email,login}=responce.data.data;
                dispatch(setUserData(id,email,login));
            }
        })
    }
}