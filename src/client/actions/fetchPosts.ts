import { Dispatch } from '@client/thunk';

import axiosService from '@client/utils/axiosService';

import {
  FETCHING_POSTS,
  FETCHING_POSTS_SUCCESS,
  FETCHING_POSTS_FAIL,
} from '@client/utils/actionTypes';

import { API_ENDPOINTS } from '@client/utils/constants';

const fetchPosts = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCHING_POSTS });

    return axiosService
      .get(API_ENDPOINTS.posts.index)
      .then((res) => {
        dispatch({
          type: FETCHING_POSTS_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_POSTS_FAIL,
          payload: err,
        });
      });
  };
};

export default fetchPosts;
