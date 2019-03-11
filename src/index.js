import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5'
import createRouter from './create-router'

import configureStore from './store';

import App from './App';

import './index.css';

const router = createRouter();

const wrappedApp = (
  <Provider store={configureStore(router)}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);

// NOTE: Remember to start the router
router.start((err, state) => {
  ReactDOM.render(wrappedApp, document.getElementById('root'))
})
