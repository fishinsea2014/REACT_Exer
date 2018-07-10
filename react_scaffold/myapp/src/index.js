import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './demo';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router />,
    document.getElementById('root'));
registerServiceWorker(); //Cache request
