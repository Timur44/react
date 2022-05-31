import React from 'react';
import { NavLink} from 'react-router-dom';

import dialogs from './Dialogs.module.css'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../Preloader/FormsControls.tsx';
import { maxLengthCreator, requiredField } from '../../utils/validations/valid.ts';


const maxLength10=maxLengthCreator(50)
const AddMessageForm=(props)=>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} validate={[requiredField,maxLength10]} name="newMessageBody" placeholder="Enter your message" text={`textarea`}></Field>
        </div>
        <div><button>Send</button></div>
    </form>
}

const AddMessageFormRedux=reduxForm({form:'dialogMessageForm'})(AddMessageForm)

const DialogsItem=(props)=>{
    return  <div className={dialogs.item}>
        <NavLink to={'/dialogs/'+props.id} className={dialogs.item}>{props.name}</NavLink>
    </div>
}
const Message=(props)=>{
    return <div className={dialogs.item}>{props.name}</div>
}



const Dialogs=(props)=>{
    let dialogsElem=props.dialogsPage.dialogs.map(item=><DialogsItem name={item.name} id={item.id}/>);
    let messageElem=props.dialogsPage.messages.map(item=><Message name={item.name} id={item.id}/>);

    let addMessage=(value)=>{

        props.sendMessageClick(value.newMessageBody);
        value.newMessageBody='';
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
                    <AddMessageFormRedux onSubmit={addMessage}/>
                </div>
            </div>
           
        </div>
    )
}

export default Dialogs;