import React from 'react';
import { Store } from 'redux';

import fetchPosts from '@actions/fetchPosts';

import HomeComponent from '@components/home';

const Home: React.FC = () => <HomeComponent />;

const loadData = (store: Store<unknown>) => {
  return store.dispatch(fetchPosts());
};

export default {
  component: Home,
  // loadData,
};
