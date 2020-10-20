import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import rootReducer from '@reducers/index';

const middleware = applyMiddleware(thunk, promise);

export default (preloadedState?: unknown) => {
  return preloadedState === undefined
    ? createStore(rootReducer, middleware)
    : createStore(rootReducer, preloadedState, middleware);
};
