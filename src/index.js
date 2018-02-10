import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import store from './store/store'
import { BrowserRouter } from 'react-router-dom'

store.subscribe(() => console.log('New state', store.getState()))

console.log(1);
store.dispatch({
  type: 'INCREASE_COUNTER'
});
console.log(2);
store.dispatch({
  type: 'INCREASE_COUNTER'
});



ReactDOM.render(<Provider store={store} >
                  <BrowserRouter>
                    <App />
                  </BrowserRouter>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
