import Action from '@typesdir/Action';

export default interface AsyncAction extends Action {
  err: string;
}
