import { combineReducers } from 'redux';

import postReducer from '@client/reducers/post.reducer';
import postsReducer from '@client/reducers/posts.reducer';
import categoryReducer from '@client/reducers/category.reducer';
import categoriesReducer from '@client/reducers/categories.reducer';

export default combineReducers({
  post: postReducer,
  posts: postsReducer,
  category: categoryReducer,
  categories: categoriesReducer,
} as any); // any is a redux typescript issue. see https://github.com/reduxjs/redux/issues/2709
