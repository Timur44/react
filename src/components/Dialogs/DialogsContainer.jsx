
import { connect } from 'react-redux';
import { sendNewMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';


let mapStateToProps=(state)=>{
    return {
        dialogsPage:state.dialogsReducer
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        sendMessageClick:()=>{
            dispatch(sendNewMessageActionCreator());
        },
        newMessageChange:(body)=>{
           dispatch(updateNewMessageBodyActionCreator(body));
        }
    }
}
const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;