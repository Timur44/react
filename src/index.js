import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




export let renderEntireThree=()=>{
    ReactDOM.render(
      <React.StrictMode>
        <App store={store.getState()} dispatch={store.dispatch.bind(store)}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
};


renderEntireThree()
store.subscribe(renderEntireThree)
reportWebVitals();
