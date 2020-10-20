import axiosService from '@client/utils/axiosService';

import {
  FETCHING_POSTS,
  FETCHING_POSTS_SUCCESS,
  FETCHING_POSTS_FAIL,
} from '@client/utils/actionTypes';

import { API_ENDPOINTS } from '@client/utils/constants';

const fetchPosts = () => async (dispatch: any) => {
  dispatch({ type: FETCHING_POSTS });

  console.log('FETCHING_POSTS');

  return axiosService
    .get(API_ENDPOINTS.posts)
    .then((res) => {
      dispatch({
        type: FETCHING_POSTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCHING_POSTS_FAIL,
        payload: err.data,
      });
    });
};

export default fetchPosts;
