import React from 'react';
import { Store } from 'redux';

import fetchCategories from '@actions/fetchCategories';

import CategoriesComponent from '@components/categories';

const component: React.FC = () => <CategoriesComponent />;

const loadData = (store: Store<unknown>) => {
  return store.dispatch(fetchCategories() as any);
};

export default {
  component,
  loadData,
};
