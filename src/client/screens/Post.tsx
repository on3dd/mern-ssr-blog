import React from 'react';
import { Store } from 'redux';

import fetchPost from '@actions/fetchPost';

import PostComponent from '@components/post';

const component: React.FC = () => <PostComponent />;

const loadData = (store: Store<unknown>, params: any) => {
  const id = params['0'].split('/')[1];

  return store.dispatch(fetchPost(id) as any);
};

export default {
  component,
  loadData,
};
