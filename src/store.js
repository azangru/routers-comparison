import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { router5Middleware, router5Reducer } from 'redux-router5';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const reducers = combineReducers({
  router: router5Reducer
})

const configureStore = (router) => {
  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(
        router5Middleware(router),
      ),
    ),
  )

  return store
};

export default configureStore;
