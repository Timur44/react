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
      <Nav items={props.state.navPage.items}/>
      <Route exact path='/dialogs' render={()=><Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
      <Route exact path='/profile' render={()=><Profile posts={props.state.postMessage} new={props.newMessage}/>}/>
    </div>
    </BrowserRouter>
  );
    
}
export default App;

