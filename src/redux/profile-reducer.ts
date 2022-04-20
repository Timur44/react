import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../api/api";

const ADD_POST="ADD-POST";
const DELETE_POST="DELETE_POST";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE="SET_USERS_PROFILE";
const SET_STATUS="SET_STATUS";
const UPDATE_PHOTO='UPDATE_PHOTO';
const SAVE_PHOTO='SAVE_PHOTO';
const SAVE_PROFILE='SAVE_PROFILE'

export type ProfileType={
   id:number,
   message:string
}
let initialState={
    postMessage:[{id:0,message:"Hi"}]as Array<ProfileType>,
    newPostText:'it-kamasutra',
    profile:null as any,
    status:"",
    photoURL:''
};
export type InitialStateType=typeof initialState;
const profileReducer=(state=initialState,action:any):InitialStateType=>{

    switch(action.type){
        case ADD_POST:
            let newPost={
                id:1,
                message:action.newPostText
            };
            return{
                ...state,
                postMessage:[...state.postMessage,newPost],
            };
        case DELETE_POST:
            return{
                ...state,
                postMessage:state.postMessage.filter(item=>item!=action.dleteId),
            };
        case SAVE_PHOTO:
            return{...state, profile: {...state.profile,photos:action.photos}};
        case UPDATE_PHOTO:
            return{
                ...state,
                photoURL:action.url
            };
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile:action.profile
            };
        case SAVE_PROFILE:
            return {
                ...state,
                profile:action.data
            };
        case SET_STATUS:
            return {
                ...state,
                status:action.status
            };
        default:
            return state;
    }
    
}

export default profileReducer;




export type AddPostActionType={
    type:typeof ADD_POST,
    newPostText:string
}
export type DeletePostActionType={
    type:typeof DELETE_POST,
    dleteId:number
}
export type SetUsersProfileActionType={
    type:typeof SET_USERS_PROFILE,
    profile:any
}
export type SetStatusActionType={
    type:typeof SET_STATUS,
    status:string
}
export type SavePhotoActionType={
    type:typeof SAVE_PHOTO,
    photos:string
}
export type UpdatePhotoActionType={
    type:typeof UPDATE_PHOTO,
    url:string
}
export type SaveProfActionType={
    type:typeof SAVE_PROFILE,
    data:any
}


export const addPostActionCreator=(newPostText:string):AddPostActionType=>{
    return {
        type:ADD_POST,newPostText
    }
}
export const deletePost=(dleteId:number):DeletePostActionType=>{
    return {
        type:DELETE_POST,dleteId
    }
}
export const setUsersProfile=(profile:any):SetUsersProfileActionType=>{
    return {
        type:SET_USERS_PROFILE,profile:profile
    }
}

export const setStatus=(status:string):SetStatusActionType=>{
    return {
        type:SET_STATUS,status
    }
}
export const savePhoto=(photos:string):SavePhotoActionType=>{
    return {
        type:SAVE_PHOTO,photos
    }
}
export const updatePhoto=(url:string):UpdatePhotoActionType=>{
    return {
        type:UPDATE_PHOTO,url
    }
}
export const saveProf=(data:any):SaveProfActionType=>{
    return {
        type:SAVE_PROFILE,data
    }
}


export const setUserThunkCreator=(userId:number)=>{
    return (dispatch:any)=>{
        usersAPI.setProfile(userId).then(responce=>{
            dispatch(setUsersProfile(responce.data));
          });
    }
}

export const getStatusThunkCreator=(userId:number)=>{
    return (dispatch:any)=>{
        profileAPI.setStatus(userId).then((responce:any)=>{
            dispatch(setStatus(responce.data));
          });
    }
}

export const updateStatusThunkCreator=(status:string)=>{
    return (dispatch:any)=>{
        profileAPI.updateStatus(status).then((responce:any)=>{
            if(responce.data.resultCode===0){
            dispatch(setStatus(status));
          }});
    }
}
export const savePhotoThunkCreator=(photo:string)=>{
    return (dispatch:any)=>{
        debugger;
        profileAPI.savePhotos(photo).then((responce:any)=>{
            debugger;
            if(responce.data.resultCode===0){
               
              dispatch(updatePhoto(responce.data.data.photos.small))
          }});
    }
}
export const saveProfile=(data:any)=>{
    return (dispatch:any)=>{
        profileAPI.saveProfile(data).then((responce:any)=>{
            if(responce.data.resultCode===0){
            dispatch(saveProf(data));
          }});
    }
}