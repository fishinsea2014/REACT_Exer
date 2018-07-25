import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import App from './components/App';
import reducer from './reducers'
// import App from './App';

const store = createStore(reducer);
render(
    // Provide 'store' for components. If has more components, then put them in APP
    <Provider store = {store}>
        <App /> 
    </Provider>,

    document.getElementById('root')
)
