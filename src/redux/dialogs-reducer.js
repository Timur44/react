const UPDATE_NEW_MESSAGE_BODY="UPDATE-NEW-MESSAGE-BODY";
const SEND_NEW_MESSAGE="SEND-NEW-MESSAGE";

const dialogsReducer=(state,action)=>{
    
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody=action.body;
            break;
        case SEND_NEW_MESSAGE:
            let body=state.newMessageBody;
            state.newMessageBody='';
            state.messages.push({name:body,id:1});
            break;
        default:
            return state;
    }
    return state
}

export default dialogsReducer;



export const sendNewMessageActionCreator=()=>{
    return {
        type:SEND_NEW_MESSAGE
    }
}
export const updateNewMessageBodyActionCreator=(body)=>{
    return {
        type:UPDATE_NEW_MESSAGE_BODY,body:body
    }
}