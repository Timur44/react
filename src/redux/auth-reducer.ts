import { authAPI, LoginTypes, ResultCodeEnum, securityAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { type } from "os";
import { AxiosResponse } from "axios";

const SET_USER_DATA="SET_USER_DATA";
const TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING"
const GET_CAPTCHA_URL_SUCCSESS="GET_CAPTCHA_URL";




let initialState={
    userId:null as string|null,
    email:null as string|null,
    login:null as string|null,
    isFetching:false, 
    isAuth:false,
    captchaURL:null as string|null
};
export type InitialStateType=typeof initialState;

const authReducer=(state=initialState,action:any):InitialStateType=>{
    
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
type SetUserDataActionDataType={
    userId:number|null,
    email:string|null,
    login:string|null,
    isAuth:boolean
}

type SetUserDataActionType={
    type:typeof SET_USER_DATA,data:SetUserDataActionDataType
}

export const setUserData=(userId:number|null,email:string|null,login:string|null,isAuth:boolean):SetUserDataActionType=>{
    return {
        type:SET_USER_DATA,data:{userId,email,login,isAuth}
    }
}

type ChangeLoaderActionType={
    type:typeof TOGGLE_IS_FETCHING,isFetching:boolean
}

export const changeLoader=(isFetching:boolean):ChangeLoaderActionType=>{
    return {
        type:TOGGLE_IS_FETCHING,isFetching
    }
}

type GetCaptchaActionType={
    type:typeof GET_CAPTCHA_URL_SUCCSESS,captcha:string
}


export const getCaptcha=(captcha:string):GetCaptchaActionType=>{
    return {
        type:GET_CAPTCHA_URL_SUCCSESS,captcha
    }
}



export const loginThunkCreator=()=>(dispatch: any)=>{
    
    return usersAPI.login().then((responce:any)=>{
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
export const logIn=(email:string,password:string,rememberMe:boolean,captcha:string)=>{
    async (dispatch: any)=>{
        
       let responce=await authAPI.login(email,password,rememberMe,captcha)
        if(responce.data.resultCode===ResultCodeEnum.Success){
            dispatch(loginThunkCreator())
        }else{
            if(responce.data.resultCode===10){
                dispatch(getCaptchaURL());
            }
            let message=responce.data.messages.length>0 ? responce.data.messages[0] : "Some Error" 
            dispatch(stopSubmit('login',{_error:message}))
        }
        
    }
}


export const logOut=()=>{
    return (dispatch: any)=>{
        authAPI.logOut().then((responce:any)=>{
            if(responce.data.resultCode===0){
                dispatch(setUserData(null,null,null,false));
            }
        })
    }
}

export const getCaptchaURL=()=>{
    return (dispatch :any)=>{
        debugger;
        securityAPI.gettCaptcha().then((responce:any)=>{
            const captchaURL=responce.data.url;
            dispatch(getCaptcha(captchaURL))
        })
    }
}