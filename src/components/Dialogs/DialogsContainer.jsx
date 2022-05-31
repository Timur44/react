
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect.js';
import { sendNewMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer.ts';
import Dialogs from './Dialogs.jsx';


let mapStateToProps=(state)=>{
    return {
        dialogsPage:state.dialogsReducer,
        isAuth:state.authReducer.isAuth
    }
}




let mapDispatchToProps=(dispatch)=>{
    return {
        sendMessageClick:(newMessageBody)=>{
            dispatch(sendNewMessageActionCreator(newMessageBody));
        }
        
    }
}




export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);