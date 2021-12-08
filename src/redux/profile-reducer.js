import { profileAPI, usersAPI } from "../api/api";

const ADD_POST="ADD-POST";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE="SET_USERS_PROFILE";
const SET_STATUS="SET_STATUS";
debugger;
let initialState={
    postMessage:[{id:0,message:"Hi"}],
    newPostText:'it-kamasutra',
    profile:null,
    status:""
};
const profileReducer=(state=initialState,action)=>{

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
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile:action.profile
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


export const addPostActionCreator=(newPostText)=>{
    return {
        type:ADD_POST,newPostText
    }
}
export const setUsersProfile=(profile)=>{
    return {
        type:SET_USERS_PROFILE,profile:profile
    }
}

export const setStatus=(status)=>{
    return {
        type:SET_STATUS,status
    }
}

export const setUserThunkCreator=(userId)=>{
    return (dispatch)=>{
        usersAPI.setProfile(userId).then(responce=>{
            dispatch(setUsersProfile(responce.data));
          });
    }
}

export const getStatusThunkCreator=(userId)=>{
    return (dispatch)=>{
        profileAPI.setStatus(userId).then(responce=>{
            dispatch(setStatus(responce.data));
          });
    }
}

export const updateStatusThunkCreator=(status)=>{
    return (dispatch)=>{
        profileAPI.updateStatus(status).then(responce=>{
            alert(status)
            if(responce.data.resultCode===0){

            dispatch(setStatus(status));
          }});
    }
}