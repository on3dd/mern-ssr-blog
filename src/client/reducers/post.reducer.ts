import {
  FETCHING_POST,
  FETCHING_POST_SUCCESS,
  FETCHING_POST_FAIL,
} from '@client/utils/actionTypes';

import { DEFAULT_POST } from '@client/utils/constants';

import { AsyncAction, Post, PostState } from '@client';

const initialState: PostState = {
  data: DEFAULT_POST,
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const postsReducer = (
  state = initialState,
  action: AsyncAction<Post | null>,
): PostState => {
  switch (action.type) {
    case FETCHING_POST:
      return Object.assign({}, state, {
        data: initialState.data,
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_POST_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_POST_FAIL:
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
