import {
  FETCHING_POSTS,
  FETCHING_POSTS_SUCCESS,
  FETCHING_POSTS_FAIL,
} from '@client/utils/actionTypes';

import { AsyncAction, PostsState, Post } from '@client';

const initialState: PostsState = {
  data: [],
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const postsReducer = (
  state = initialState,
  action: AsyncAction<Post[]>,
): PostsState => {
  switch (action.type) {
    case FETCHING_POSTS:
      return Object.assign({}, state, {
        data: initialState.data,
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_POSTS_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_POSTS_FAIL:
      return Object.assign({}, state, {
        data: initialState.data,
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default postsReducer;
