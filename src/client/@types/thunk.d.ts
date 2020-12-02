declare module '@client/thunk' {
  import { ThunkDispatch, ThunkAction } from 'redux-thunk';

  import { RootState as S, AnyAction as A } from '@client';

  export type Dispatch = ThunkDispatch<S, any, any>; // TODO: fix any

  export type Action = ThunkAction<void, S, any, A>; // TODO: fix any
}
