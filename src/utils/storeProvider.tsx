import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';

import clientStore from '@store/index';

type StoreProviderProps = {
  children: JSX.Element;
  store?: Store<unknown>;
}

const StoreProvider: React.FC<StoreProviderProps> = (
  { children, store = clientStore }: StoreProviderProps
) => {
  return (
    // any is a redux typescript issue. see https://github.com/reduxjs/redux/issues/2709
    <Provider store={store as any}>
      {children}
    </Provider>
  )
}

export default StoreProvider;
