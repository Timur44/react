const UPDATE_NEW_MESSAGE_BODY="UPDATE-NEW-MESSAGE-BODY";
const SEND_NEW_MESSAGE="SEND-NEW-MESSAGE";
let initialState={
    dialogs:[{name:"Timur",id:1},{name:"Nikita",id:1},{name:"Lexa",id:1},{name:"Kirill",id:1},{name:"Matwey",id:1}],
    messages:[{name:"Hi",id:1},{name:"Hello",id:1},{name:"Privet",id:1},{name:"Arigato",id:1}],
    newMessageBody:"wadawd"
};
const dialogsReducer=(state=initialState,action)=>{
    
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