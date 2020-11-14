import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/index';
import rootReducer from './store/modules';
import App from './App';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(),
));
console.log(store);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);