import React from 'react';
import { Store } from 'redux';

import fetchPosts from '@actions/fetchPosts';

import PostsComponent from '@components/posts';

const component: React.FC = () => <PostsComponent />;

const loadData = (store: Store<unknown>) => {
  return store.dispatch(fetchPosts() as any);
};

export default {
  component,
  loadData,
};
