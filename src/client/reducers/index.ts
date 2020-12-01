import { combineReducers } from 'redux';

import postsReducer from '@client/reducers/posts.reducer';

export default combineReducers({
  posts: postsReducer,
} as any); // any is a redux typescript issue. see https://github.com/reduxjs/redux/issues/2709
