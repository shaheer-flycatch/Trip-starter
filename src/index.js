import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { store } from './helpers';
ReactDOM.render(
  <Provider store={store}>
 <App />
  </Provider>
   
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
