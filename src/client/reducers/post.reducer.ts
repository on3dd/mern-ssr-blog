import {
  FETCHING_POST,
  FETCHING_POST_SUCCESS,
  FETCHING_POST_FAIL,
} from '@client/utils/actionTypes';

import { AsyncAction, PostState } from '@client';

const initialState: PostState = {
  data: {
    id: 0,
    title: '',
    description: '',
    date: '',
    content: '',
    category: {
      id: 0,
      name: '',
      posts: [],
    },
  },
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const postsReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case FETCHING_POST:
      return Object.assign({}, state, {
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
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default postsReducer;
