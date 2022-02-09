import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/Preloader/Preloader'
import { setInitializedApp } from './redux/app-reducer';


class App extends React.Component{
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
          <Route exact path='/dialogs' render={()=>
            <DialogsContainer 
              store={this.props.store} 
            />
            }/>
          <Route exact path='/profile/:userId?' render={()=>
            <ProfileContainer
              store={this.props.store} 
            />
          }/>
            <Route exact path='/users' render={()=>
            <UsersContainer
              store={this.props.store} 
            />
          }/>
            <Route exact path='/login' render={()=>
            <LoginContainer
              store={this.props.store} 
            />
          }/>
        </div>
      </BrowserRouter>
    );
  }
  
    
}
const mapStateToProps=(state)=>({
  initialized:state.appReducer.initialized
})
export default compose(
  connect(mapStateToProps,{setInitializedApp}))(App);

