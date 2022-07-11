import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/Preloader/Preloader'
import { setInitializedApp } from './redux/app-reducer';

import HeaderContainer from './components/Header/HeaderContainer';
import {LoginContainer} from './components/Login/LoginContainer';
import Nav from './components/Nav/Nav';
import { HelmetProvider } from 'react-helmet-async';
import { ThunkAction } from 'redux-thunk';
import store, { AppState } from './redux/redux-store';
import { ActionTypes } from './redux/users-reducer';
import { UsersPage } from './components/Users/UsersContainer';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
type MapStateToProps=ReturnType<typeof mapStateToProps>
type MapDispatchToProps={
  setInitializedApp:()=>(dispatch:any)=>ThunkAction<void,AppState,unknown,ActionTypes>,
  
  
}
type IProps={
  store:any
}

class App extends React.Component< MapStateToProps & MapDispatchToProps & IProps >{
  componentDidMount(){
 
    this.props.setInitializedApp();
    
  }
  render(){
    if(!this.props.initialized){
      return <Preloader></Preloader>
    }
    return (
      <BrowserRouter>
        <div className="wrapper">
          <HeaderContainer/>
          <Nav/>
          <Route exact path='/dialogs' render={()=>{
              return <React.Suspense fallback={<div>Loading...</div>}>
                 <DialogsContainer store={this.props.store}/>
              </React.Suspense>
          }
            }/>
          <Route exact path='/profile/:userId?' render={()=>{
            return <React.Suspense fallback={<div>Loading...</div>}>
                <ProfileContainer store={this.props.store}/>
            </React.Suspense>
          }
          }/>
            <Route exact path='/users' render={()=>
             <UsersPage/>
          }/>
            <Route exact path='/login' render={()=>
            <LoginContainer/>
          }/>
        </div>
      </BrowserRouter>
    );
  }
  
    
}
const mapStateToProps=(state:AppState)=>({
  initialized:state.appReducer.initialized
})
let AppContainer=compose<React.ComponentType>(
  connect(mapStateToProps,{setInitializedApp}))(App);

const SamurayJSApp: React.FC =(props:any)=>{
  return(
    <HelmetProvider>
       <Provider store={store}>
          <AppContainer/>
      </Provider>
    </HelmetProvider>
  )
}
export default SamurayJSApp

