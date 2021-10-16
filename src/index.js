import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store.js';
import navItems from './redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




export let renderEntireThree=(state)=>{
    ReactDOM.render(
      <React.StrictMode>
        <App store={state} dispatch={store.dispatch.bind(store)} navItems={navItems.getState()}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
};


renderEntireThree(store.getState())
store.subscribe(()=>{
  let state=store.getState();
  renderEntireThree(state);
})
reportWebVitals();
