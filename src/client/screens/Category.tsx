import React from 'react';
import { Store } from 'redux';

import fetchCategory from '@actions/fetchCategory';

import CategoryComponent from '@components/category';

const component: React.FC = () => <CategoryComponent />;

const loadData = (store: Store<unknown>, params: any) => {
  const id = params['0'].split('/')[1];

  return store.dispatch(fetchCategory(id) as any);
};

export default {
  component,
  loadData,
};
