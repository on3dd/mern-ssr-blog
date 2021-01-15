import React from 'react';
import { Store } from 'redux';

import fetchPosts from '@actions/fetchPosts';

import CategoryComponent from '@components/category';

const component: React.FC = () => <CategoryComponent />;

const loadData = (store: Store<unknown>) => {
  return store.dispatch(fetchPosts() as any); // TODO: change with correct action
};

export default {
  component,
  loadData,
};
