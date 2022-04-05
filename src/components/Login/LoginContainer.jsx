import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../utils/validations/valid';
import { Input } from '../Preloader/FormsControls';
import { logIn,logOut } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import styles from './../Preloader/FormsControls.module.css'


const LoginContainer=(props)=>{
    const getDataFromForm=(formData)=>{
        
        props.logIn(formData.email,formData.password,formData.rememberMe,formData.captcha);
    }
    if(props.isAuth===true){
        return <Redirect to='/profile'/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={getDataFromForm} captchaURL={props.captchaURL}></LoginReduxForm>
    </div> 
}
const maxLength10=maxLengthCreator(20)
const LoginForm=({handleSubmit,error,captchaURL})=>{
    return <div>
        <form onSubmit={handleSubmit}>
            <div><Field component={Input} type="text" placeholder="login" name="email" validate={[requiredField,maxLength10]} text={`input`} /></div>
            <div><Field component={Input} type="password" placeholder="password" name="password" validate={[requiredField,maxLength10]} text={`input`} /></div>
            <div>Remember me <Field component={Input}  type="checkbox" placeholder="password" name="rememberMe" /></div>
            {captchaURL && <img src={captchaURL}></img>}
            {captchaURL && <Field component={Input}  type="text" placeholder="simbols from image" name="captcha"  validate={[requiredField]}/>}
            {error && <div className={styles.summaryError}>{error}</div>}
            <div><button type="submit">Log in </button></div>
        </form>
    </div> 
}

const LoginReduxForm=reduxForm({ // <----- THIS IS THE IMPORTANT PART!
    form: 'login',                           // a unique name for this form
  })(LoginForm)


  let mapStateToProps=(state)=>({
    isAuth:state.authReducer.isAuth,
    captchaURL:state.authReducer.captchaURL
})
export default connect(mapStateToProps,{logIn,logOut})(LoginContainer)