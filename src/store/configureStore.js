import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { createLogger } from 'redux-logger';

import rootReducer from 'reducers';

// const loggerMiddleware = createLogger();

export default function configureStore(preloadedState = {}) {
  const middlewares = [thunk]; // loggerMiddleware
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  return store;
}