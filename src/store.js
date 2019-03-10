import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history)
})

const configureStore = (history) => {
  const store = createStore(
    createRootReducer(history), // root reducer with router state,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
      ),
    ),
  )

  return store
};

export default configureStore;
