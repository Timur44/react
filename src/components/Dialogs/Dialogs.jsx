import React from 'react';
import { NavLink } from 'react-router-dom';
import { sendNewMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer.js';
import dialogs from './Dialogs.module.css'





const DialogsItem=(props)=>{
    return  <div className={dialogs.item}>
        <NavLink to={'/dialogs/'+props.id} className={dialogs.item}>{props.name}</NavLink>
    </div>
}
const Message=(props)=>{
    return <div className={dialogs.item}>{props.name}</div>
}




const Dialogs=(props)=>{
    let dialogsElem=props.dialogsPage.dialogsReducer.dialogs.map(item=><DialogsItem name={item.name} id={item.id}/>);
    let messageElem=props.dialogsPage.dialogsReducer.messages.map(item=><Message name={item.name} id={item.id}/>);
    let newMessageBody=props.dialogsPage.dialogsReducer.newMessageBody;
    let onSendMessageClick=()=>{
        props.dispatch(sendNewMessageActionCreator())
    }
    let onNewMessageChange=(event)=>{
       let body=event.target.value;
       props.dispatch(updateNewMessageBodyActionCreator(body))
    }


    return(
        <div>
            <h1>Dialogs</h1>
            <div className={dialogs.wrapper}>
                <div >
                    <div >
                        {dialogsElem}
                    </div>
                </div>
                <div>
                    <div>
                        {messageElem}
                    </div>
                    <div>
                        <div><textarea value={newMessageBody} placeholder="Enter your message" onChange={onNewMessageChange}></textarea></div>
                        <div><button onClick={onSendMessageClick}>Send</button></div>
                    </div>
                      
                </div>
            </div>
           
        </div>
    )
}

export default Dialogs;