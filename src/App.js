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
            dialogs={props.store.dialogsPage.dialogs} 
            messages={props.store.dialogsPage.messages}
          />
          }/>
        <Route exact path='/profile' render={()=>
          <Profile 
            posts={props.store.postMessage} 
            new={props.newMessage} 
            newPostText={props.store.newPostText}
            updateNewPostText={props.updateNewPostText}
          />
        }/>
      </div>
    </BrowserRouter>
  );
    
}
export default App;

