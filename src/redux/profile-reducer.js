import { usersAPI } from "../api/api";

const ADD_POST="ADD-POST";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE="SET_USERS_PROFILE";

let initialState={
    postMessage:[{id:0,message:"Hi"}],
    newPostText:'it-kamasutra',
    profile:null
};
const profileReducer=(state=initialState,action)=>{

    switch(action.type){
        case ADD_POST:
            let newPost={
                id:1,
                message:state.newPostText
            };
            return{
                ...state,
                postMessage:[...state.postMessage,newPost],
                newPostText:''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText:action.newText
            };
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile:action.profile
            };
        default:
            return state;
    }
    
}

export default profileReducer;


export const addPostActionCreator=()=>{
    return {
        type:ADD_POST
    }
}
export const updateNewPostTextActionCreator=(text)=>{
    return {
        type:UPDATE_NEW_POST_TEXT,newText:text
    }
}
export const setUsersProfile=(profile)=>{
    return {
        type:SET_USERS_PROFILE,profile:profile
    }
}

export const setUserThunkCreator=(userId)=>{
    return (dispatch)=>{
        usersAPI.setProfile(userId).then(responce=>{
            dispatch(setUsersProfile(responce.data));
          });
    }
}