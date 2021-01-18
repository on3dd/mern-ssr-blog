import { Dispatch } from '@client/thunk';

import axiosService from '@client/utils/axiosService';

import {
  FETCHING_CATEGORIES,
  FETCHING_CATEGORIES_SUCCESS,
  FETCHING_CATEGORIES_FAIL,
} from '@client/utils/actionTypes';

import { API_ENDPOINTS } from '@client/utils/constants';

const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCHING_CATEGORIES });

    return axiosService
      .get(API_ENDPOINTS.categories.index)
      .then((res) => {
        dispatch({
          type: FETCHING_CATEGORIES_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_CATEGORIES_FAIL,
          payload: err,
        });
      });
  };
};

export default fetchCategories;
