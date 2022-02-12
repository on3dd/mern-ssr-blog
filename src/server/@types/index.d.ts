declare module '@server' {
  import { Document } from 'mongoose';

  type AsyncResult<
    T extends Document,
    R = T | null,
  > = Promise<R>;

  export interface CrudService<T extends Document> {
    all?: () => AsyncResult<T[]>;
    find?: (id: any) => AsyncResult<T>;
    create?: (body: any) => AsyncResult<T>;
    update?: (body: any) => AsyncResult<T>;
    delete?: (id: any) => AsyncResult<T>;
  }

  export interface User extends Document {
    id: number;
    email: string;
    username: string;
    password: string;
    isValidPassword: (password: string) => Promise<boolean>;
  }

  export interface Category extends Document {
    id: number;
    name: string;
    description: string;
    posts: Post[];
  }

  export interface Post extends Document {
    id: number;
    title: string;
    description: string;
    content: string;
    date: Date;
    category: Category;
  }

  export type Token = string;

  export type TokenDecoded = TokenPayload | undefined;

  export interface TokenPayload {
    username: string;
    expires: number;
  }
}
