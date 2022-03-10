import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import SamurayJSApp from './App';





  ReactDOM.render(
    <React.StrictMode>
        <SamurayJSApp></SamurayJSApp>
    </React.StrictMode>,
    document.getElementById('root')
  );

reportWebVitals();
