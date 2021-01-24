import {
  FETCHING_CATEGORY,
  FETCHING_CATEGORY_SUCCESS,
  FETCHING_CATEGORY_FAIL,
} from '@client/utils/actionTypes';

import { DEFAULT_CATEGORY } from '@client/utils/constants';

import {
  AsyncAction,
  Category,
  CategoryState,
} from '@client';

const initialState: CategoryState = {
  data: DEFAULT_CATEGORY,
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const categoryReducer = (
  state = initialState,
  action: AsyncAction<Category | null>,
): CategoryState => {
  switch (action.type) {
    case FETCHING_CATEGORY:
      return Object.assign({}, state, {
        data: initialState.data,
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_CATEGORY_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_CATEGORY_FAIL:
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

export default categoryReducer;
