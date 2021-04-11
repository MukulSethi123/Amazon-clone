import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateProvider} from './StateProvider';
import reducer, {initialState} from "./reducer";


//initailState -> how it will look in the start 
// reducer is to manage state in an application. this is how the data is dispatched into the data layer
// 
ReactDOM.render(  
  <StateProvider initalState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
  ,
  document.getElementById('root')
);
