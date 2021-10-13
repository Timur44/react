import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPosts} from './redux/state.js'



export let renderEntireThree=(state)=>{
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} newMessage={addPosts}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
};