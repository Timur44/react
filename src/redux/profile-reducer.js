const ADD_POST="ADD-POST";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";

let initialState={
    postMessage:[{id:0,message:"Hi"}],
    newPostText:'it-kamasutra'
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