import { CategoryResponse } from '@client';
import { Dispatch } from '@client/thunk';

import axiosService from '@client/utils/axiosService';

import {
  FETCHING_CATEGORY,
  FETCHING_CATEGORY_SUCCESS,
  FETCHING_CATEGORY_FAIL,
} from '@client/utils/actionTypes';

import { API_ENDPOINTS } from '@client/utils/constants';

const fetchCategory = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCHING_CATEGORY });

    return axiosService
      .get(API_ENDPOINTS.categories.id(id))
      .then((res: CategoryResponse) => {
        dispatch({
          type: FETCHING_CATEGORY_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_CATEGORY_FAIL,
          payload: err,
        });
      });
  };
};

export default fetchCategory;
