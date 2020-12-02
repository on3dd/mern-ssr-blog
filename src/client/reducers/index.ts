import { combineReducers } from 'redux';

import postReducer from '@client/reducers/post.reducer';
import postsReducer from '@client/reducers/posts.reducer';

export default combineReducers({
  post: postReducer,
  posts: postsReducer,
} as any); // any is a redux typescript issue. see https://github.com/reduxjs/redux/issues/2709
