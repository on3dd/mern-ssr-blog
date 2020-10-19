import React from 'react';
import { Provider } from 'react-redux';

import store from '@store/index';

type StoreProviderProps = {
  children: JSX.Element;
}

const StoreProvider: React.FC<StoreProviderProps> = (
  { children }: StoreProviderProps
) => {
  return (
    // any is a redux typescript issue. see https://github.com/reduxjs/redux/issues/2709
    <Provider store={store as any}>
      {children}
    </Provider>
  )
}

export default StoreProvider;
