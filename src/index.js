import React from 'react';
import ReactDOM from 'react-dom/client';
import { Hello } from './Hello';
import { App } from './App';
const helloworld = <App />

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(helloworld);

// Did this in the previous exercise without realising