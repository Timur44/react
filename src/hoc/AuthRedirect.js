import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';


let mapStateToPropsForRedirect=(state)=>{
    return {
        isAuth:state.authReducer.isAuth
    }
}

export const withAuthRedirect=(Component)=>{
    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.isAuth) return <Redirect to="/login"></Redirect>
            return <Component {...this.props}/>
        }
    }

    let ConnectedRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedRedirectComponent;
}