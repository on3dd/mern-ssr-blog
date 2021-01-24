import {
  FETCHING_CATEGORIES,
  FETCHING_CATEGORIES_SUCCESS,
  FETCHING_CATEGORIES_FAIL,
} from '@client/utils/actionTypes';

import {
  AsyncAction,
  Category,
  CategoriesState,
} from '@client';

const initialState: CategoriesState = {
  data: [],
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const categoriesReducer = (
  state = initialState,
  action: AsyncAction<Category[]>,
): CategoriesState => {
  switch (action.type) {
    case FETCHING_CATEGORIES:
      return Object.assign({}, state, {
        data: initialState.data,
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_CATEGORIES_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_CATEGORIES_FAIL:
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

export default categoriesReducer;
