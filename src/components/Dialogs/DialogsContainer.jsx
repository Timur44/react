
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect.js';
import { sendNewMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';


let mapStateToProps=(state)=>{
    return {
        dialogsPage:state.dialogsReducer,
        isAuth:state.authReducer.isAuth
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




export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);