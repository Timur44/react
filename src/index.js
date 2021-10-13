import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPosts, updateNewPostText,subscribe} from './redux/state.js'



export let renderEntireThree=()=>{
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} newMessage={addPosts} updateNewPostText={updateNewPostText}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
};
renderEntireThree()

subscribe(renderEntireThree)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
