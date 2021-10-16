import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';


const App=(props)=>{
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Nav items={props.store.navPage.items}/>
        <Route exact path='/dialogs' render={()=>
          <Dialogs 
            dispatch={props.dispatch}
            dialogsPage={props.store}
          />
          }/>
        <Route exact path='/profile' render={()=>
          <Profile
            standartValue={props.store.profilePage.newPostText} 
            posts={props.store.profilePage.postMessage} 
            dispatch={props.dispatch}
          />
        }/>
      </div>
    </BrowserRouter>
  );
    
}
export default App;

