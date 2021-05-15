import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../src/AppStore/Store';

//components import
import App from './App';


//css import
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>
  ,document.getElementById('root')
);
