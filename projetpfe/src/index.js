import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import requestsReducer from './Config/RequestSlice'; // Import requests reducer
import authReducer from './Config/AuthSlice'; // Import auth reducer (assuming it's in AuthSlice.js)

const store = configureStore({
  reducer: {
    requests: requestsReducer,
    auth: authReducer, // Add auth reducer to the store configuration
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
