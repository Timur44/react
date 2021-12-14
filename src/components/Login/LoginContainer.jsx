import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../utils/validations/valid';
import { Input } from '../Preloader/FormsControls';


const LoginContainer=(props)=>{
    const getDataFromForm=(formData)=>{
        console.log(formData)
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
            <div><Field component={Input} type="text" placeholder="login" name="login" validate={[requiredField,maxLength10]} text={`input`} /></div>
            <div><Field component={Input} type="text" placeholder="password" name="password" validate={[requiredField,maxLength10]} text={`input`} /></div>
            <div>Remember me <Field component={Input} validate={[requiredField,maxLength10]} type="checkbox" placeholder="password" name="remember" /></div>
            <div><button type="submit">Log in </button></div>
        </form>
    </div> 
}

const LoginReduxForm=reduxForm({ // <----- THIS IS THE IMPORTANT PART!
    form: 'login',                           // a unique name for this form
  })(LoginForm)

export default LoginContainer