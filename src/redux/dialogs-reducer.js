const UPDATE_NEW_MESSAGE_BODY="UPDATE-NEW-MESSAGE-BODY";
const SEND_NEW_MESSAGE="SEND-NEW-MESSAGE";
let initialState={
    dialogs:[{name:"Frol",id:1},{name:"Nikita",id:1},{name:"Lexa",id:1},{name:"Kirill",id:1},{name:"Matwey",id:1}],
    messages:[{name:"Hi",id:1},{name:"Hello",id:1},{name:"Privet",id:1},{name:"Arigato",id:1}],
    newMessageBody:"wadawd"
};
const dialogsReducer=(state=initialState,action)=>{
    
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return{
                ...state,
                newMessageBody:action.body
            };

        case SEND_NEW_MESSAGE:
            let body=state.newMessageBody;
            return{
                ...state,
                messages:[...state.messages,{name:body,id:1}],
                newMessageBody:''
            };
        default:
            return state;
    }

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