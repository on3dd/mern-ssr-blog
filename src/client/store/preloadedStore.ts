import createStore from '@store/index';

declare global {
  interface Window {
    __PRELOADED_STATE__: any;
  }
}

export default () => {
  const preloadedState = window.__PRELOADED_STATE__;

  delete window.__PRELOADED_STATE__;

  return createStore(preloadedState);
};
