import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store'
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux'





ReactDOM.render(<Provider store={store}><App store={store} /></Provider>, document.getElementById('root'));
serviceWorker.unregister();





