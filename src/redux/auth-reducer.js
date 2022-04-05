import { authAPI, securityAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA="SET_USER_DATA";
const TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING"
const GET_CAPTCHA_URL_SUCCSESS="GET_CAPTCHA_URL";

let initialState={
    userId:null,
    email:null,
    login:null,
    isFetching:false,
    isAuth:false,
    captchaURL:null
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

        case GET_CAPTCHA_URL_SUCCSESS:
            return{
                ...state,
                captchaURL:action.captcha
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
export const getCaptcha=(captcha)=>{
    return {
        type:GET_CAPTCHA_URL_SUCCSESS,captcha
    }
}



export const loginThunkCreator=()=>(dispatch)=>{
    
    return usersAPI.login().then(responce=>{
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
export const logIn=(email,password,rememberMe,captcha)=>{
    return (dispatch)=>{
        
        authAPI.login(email,password,rememberMe,captcha).then(responce=>{
            if(responce.data.resultCode===0){
                dispatch(loginThunkCreator())
            }else{
                if(responce.data.resultCode===10){
                    dispatch(getCaptchaURL());
                }
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

export const getCaptchaURL=()=>{
    return (dispatch)=>{
        debugger;
        securityAPI.gettCaptcha().then(responce=>{
            const captchaURL=responce.data.url;
            dispatch(getCaptcha(captchaURL))
        })
    }
}