const ADD_POST="ADD-POST";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";


const profileReducer=(state,action)=>{

    switch(action.type){
        case ADD_POST:
            let newPost={
                id:1,
                message:state.newPostText
            };
            state.postMessage.push(newPost);
            state.newPostText='';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText=action.newText;
            break;
        default:
            return state;
    }
    return state
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