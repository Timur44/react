const ADD_POST="ADD-POST";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY="UPDATE-NEW-MESSAGE-BODY";
const SEND_NEW_MESSAGE="SEND-NEW-MESSAGE";
let store={
    _state:{
        dialogsPage:{
            dialogs:[{name:"Timur",id:1},{name:"Nikita",id:1},{name:"Lexa",id:1},{name:"Kirill",id:1},{name:"Matwey",id:1}],
            messages:[{name:"Hi",id:1},{name:"Hello",id:1},{name:"Privet",id:1},{name:"Arigato",id:1}],
            newMessageBody:"wadawd"
        },
        navPage:{
            items:['Profile','Messages','News','Music','Settings']
        },
        postMessage:[{id:0,message:"Hi"}],
        newPostText:'it-kamasutra'
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this.renderEntireThree=observer;
    },
    _updateNewPostText(newText){
        this._state.newPostText=newText;
        this.renderEntireThree();
    },
    _addPost(){
        let newPost={
            id:1,
            message:this._state.newPostText
        };
        this._state.postMessage.push(newPost);
        this._updateNewPostText('');
        this.renderEntireThree();
    },
    renderEntireThree(){},
    dispatch(action){
       
        if(action.type===ADD_POST){
           this._addPost();
        }else if(action.type===UPDATE_NEW_POST_TEXT){
            this._updateNewPostText(action.newText);
        }else if(action.type===UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody=action.body;
            debugger;
            this.renderEntireThree()
        }else if(action.type===SEND_NEW_MESSAGE){
            let body=this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody='';
            this._state.dialogsPage.messages.push({name:body,id:1});
            this.renderEntireThree()
        }
    }

    
}

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







 

    
   
export default store;
window.store=store;