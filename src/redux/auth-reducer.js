import { authAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";

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



export const setUserData=(userId,email,login,isAuth)=>{
    return {
        type:SET_USER_DATA,data:{userId,email,login,isAuth}
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
            dispatch(changeLoader(true))
            if(responce.data.resultCode===0){
                dispatch(changeLoader(false))
                let {id,email,login}=responce.data.data;
                dispatch(setUserData(id,email,login,true));
            }else{
                console.warn('you should log in');
                dispatch(changeLoader(false))
            }
        })
    }
}
export const logIn=(email,password,rememberMe)=>{
    return (dispatch)=>{
        
        authAPI.login(email,password,rememberMe).then(responce=>{
            if(responce.data.resultCode===0){
                dispatch(loginThunkCreator())
            }else{
                let message=responce.data.messages.length>0 ? responce.data.messages[0] : "Some Error" 
                dispatch(stopSubmit('login',{_error:message}))
            }
        }) 
    }
}


export const logOut=()=>{
    return (dispatch)=>{
        authAPI.logOut().then(responce=>{
            if(responce.data.resultCode===0){
                dispatch(setUserData(null,null,null,false));
            }
        })
    }
}