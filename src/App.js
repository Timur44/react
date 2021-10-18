import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';


const App=(props)=>{
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Nav items={props.navItems.navPage.items}/>
        <Route exact path='/dialogs' render={()=>
          <DialogsContainer 
            store={props.store} 
          />
          }/>
        <Route exact path='/profile' render={()=>
          <Profile
            store={props.store} 
          />
        }/>
      </div>
    </BrowserRouter>
  );
    
}
export default App;

