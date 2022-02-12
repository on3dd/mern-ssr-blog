declare module '@client' {
  import React from 'react';
  import { AxiosResponse } from 'axios';

  export { AnyAction } from 'redux';

  export interface Route {
    to: string;
    name: string;
    emoji: string;
  }

  export interface Action<T> extends AnyAction {
    type: string;
    payload: T;
  }

  export interface AsyncAction<T> extends Action<T> {
    err: string;
  }

  // TODO: move it to src/shared/types
  export interface Post {
    id: number;
    title: string;
    description: string;
    content: string;
    date: string;
    category: Category;
  }

  // TODO: move it to src/shared/types
  export interface Category {
    id: number;
    name: string;
    description: string;
    posts: Post[];
  }

  interface State<T> {
    data: T;
    isFetching: boolean;
    hasError: boolean;
    errorMessage: null | string;
  }

  export interface PostState extends State<Post> {}
  export interface PostsState extends State<Post[]> {}

  export interface CategoryState extends State<Category> {}
  export interface CategoriesState
    extends State<Category[]> {}

  export interface RootState {
    post: PostState;
    posts: PostsState;
    category: CategoryState;
    categories: CategoriesState;
  }

  type ApiResponse<T> = AxiosResponse<{
    data: T;
    error: Error;
  }>;

  export type PostResponse = ApiResponse<Post | null>;
  export type PostsResponse = ApiResponse<Post[]>;

  export type CategoryResponse =
    ApiResponse<Category | null>;
  export type CategoriesResponse = ApiResponse<Category[]>;
}
