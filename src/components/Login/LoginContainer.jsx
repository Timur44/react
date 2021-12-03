import React from 'react';
import { Field, reduxForm } from 'redux-form';


const LoginContainer=(props)=>{
    const getDataFromForm=(formData)=>{
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={getDataFromForm}></LoginReduxForm>
    </div> 
}

const LoginForm=(props)=>{
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div><Field component="input" type="text" placeholder="login" name="login" /></div>
            <div><Field component="input" type="text" placeholder="password" name="password" /></div>
            <div>Remember me <Field component="input" type="checkbox" placeholder="password" name="remember" /></div>
            <div><button type="submit">Log in </button></div>
        </form>
    </div> 
}

const LoginReduxForm=reduxForm({ // <----- THIS IS THE IMPORTANT PART!
    form: 'login',                           // a unique name for this form
  })(LoginForm)

export default LoginContainer