import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import ProfileContainer from './components/Profile/ProfileContainer';
import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';


const App=(props)=>{
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Nav/>
        <Route exact path='/dialogs' render={()=>
          <DialogsContainer 
            store={props.store} 
          />
          }/>
        <Route exact path='/profile' render={()=>
          <ProfileContainer
            store={props.store} 
          />
        }/>
          <Route exact path='/users' render={()=>
          <UsersContainer
            store={props.store} 
          />
        }/>
      </div>
    </BrowserRouter>
  );
    
}
export default App;

