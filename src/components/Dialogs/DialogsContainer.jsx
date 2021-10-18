import React from 'react';
import { sendNewMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';





const DialogsContainer=(props)=>{
    let store=props.store.getState();
    let onSendMessageClick=()=>{
        props.store.dispatch(sendNewMessageActionCreator())
    }
    let onNewMessageChange=(body)=>{
       props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }


    return(
     <Dialogs sendMessageClick={onSendMessageClick} newMessageChange={onNewMessageChange} dialogs={store.dialogsReducer.dialogs} messages={store.dialogsReducer.messages} newMessageBody={store.dialogsReducer.newMessageBody}></Dialogs>
    )
}

export default DialogsContainer;