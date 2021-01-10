declare module '@client' {
  import React from 'react';
  import { AxiosResponse } from 'axios';

  export { AnyAction } from 'redux';

  export interface Action<T> extends AnyAction {
    type: string;
    payload: T;
  }

  export interface AsyncAction<T> extends Action<T> {
    err: string;
  }

  export interface Post {
    id: number;
    title: string;
    description: string;
    content: string;
    date: string;
    category: Category;
  }

  export interface Category {
    id: number;
    name: string;
    posts: string[];
  }

  interface State<T> {
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

  type ApiResponse<T> = AxiosResponse<{
    data: T;
    error: Error;
  }>;

  export type PostResponse = ApiResponse<Post | null>;
  export type PostsResponse = ApiResponse<Post[]>;
}
