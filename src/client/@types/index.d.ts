declare module '@client' {
  import React from 'react';
  import { AnyAction } from 'redux';

  export { AnyAction } from 'redux';

  export interface Action extends AnyAction {
    type: string;
    payload: any;
  }

  export interface AsyncAction extends Action {
    err: string;
  }

  export interface Post {
    id: number;
    title: string;
    description: string;
    date: string;
    category: Category;
  }

  export interface Category {
    id: number;
    name: string;
    posts: string[];
  }

  export interface State<T> {
    data: T;
    isFetching: boolean;
    hasError: boolean;
    errorMessage: null | string;
  }

  export interface PostState extends State<Post> {}
  export interface PostsState extends State<Post[]> {}

  export interface RootState {
    post: PostState;
    posts: PostsState;
  }
}
