import { PostResponse } from '@client';
import { Dispatch } from '@client/thunk';

import axiosService from '@client/utils/axiosService';

import {
  FETCHING_POST,
  FETCHING_POST_SUCCESS,
  FETCHING_POST_FAIL,
} from '@client/utils/actionTypes';

import { API_ENDPOINTS } from '@client/utils/constants';

const fetchPost = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCHING_POST });

    return axiosService
      .get(API_ENDPOINTS.posts.id(id))
      .then((res: PostResponse) => {
        dispatch({
          type: FETCHING_POST_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_POST_FAIL,
          payload: err,
        });
      });
  };
};

export default fetchPost;
