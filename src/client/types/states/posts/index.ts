import Post from '@typesdir/Post';

export default interface SymbolsState {
  data: Post[];
  isFetching: boolean;
  hasError: boolean;
  errorMessage: null | string;
}
