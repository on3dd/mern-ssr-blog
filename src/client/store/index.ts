import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import rootReducer from '@reducers/index';

const middleware = applyMiddleware(thunk, promise);

const store = createStore(rootReducer, middleware);

export default store;
