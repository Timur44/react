
const SEND_NEW_MESSAGE="SEND-NEW-MESSAGE";
let initialState={
    dialogs:[{name:"Frol",id:1},{name:"Nikita",id:1},{name:"Lexa",id:1},{name:"Kirill",id:1},{name:"Matwey",id:1}],
    messages:[{name:"Hi",id:1},{name:"Hello",id:1},{name:"Privet",id:1},{name:"Arigato",id:1}],
    newMessageBody:"wadawd"
};
const dialogsReducer=(state=initialState,action)=>{
    
    switch(action.type){
        case SEND_NEW_MESSAGE:
            let body=action.newMessageBody;
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



export const sendNewMessageActionCreator=(newMessageBody)=>{
    return {
        type:SEND_NEW_MESSAGE,newMessageBody
    }
}
