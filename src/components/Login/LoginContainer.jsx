import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../utils/validations/valid';
import { Input } from '../Preloader/FormsControls';
import { logIn,logOut } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';


const LoginContainer=(props)=>{
    const getDataFromForm=(formData)=>{
        
        props.logIn(formData.email,formData.password,formData.rememberMe);
    }
    if(props.isAuth===true){
        return <Redirect to='/profile'/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={getDataFromForm}></LoginReduxForm>
    </div> 
}
const maxLength10=maxLengthCreator(20)
const LoginForm=(props)=>{
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input} type="text" placeholder="login" name="email" validate={[requiredField,maxLength10]} text={`input`} /></div>
            <div><Field component={Input} type="password" placeholder="password" name="password" validate={[requiredField,maxLength10]} text={`input`} /></div>
            <div>Remember me <Field component={Input}  type="checkbox" placeholder="password" name="rememberMe" /></div>
            <div><button type="submit">Log in </button></div>
        </form>
    </div> 
}

const LoginReduxForm=reduxForm({ // <----- THIS IS THE IMPORTANT PART!
    form: 'login',                           // a unique name for this form
  })(LoginForm)


  let mapStateToProps=(state)=>({
    isAuth:state.authReducer.isAuth,
})
export default connect(mapStateToProps,{logIn,logOut})(LoginContainer)