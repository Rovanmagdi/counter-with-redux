import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './storeRedux';
import Counter from './counter';
import storeToolkit from './storeToolkit'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={store}>
    <App />
  </Provider>
  <Provider store={storeToolkit}>
  <Counter/>
  </Provider>
  </>

  
);

