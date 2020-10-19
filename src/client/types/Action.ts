import { AnyAction } from 'redux';

export default interface Action extends AnyAction {
  type: string;
  payload: any;
}
