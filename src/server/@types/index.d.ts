declare module '@server' {
  import { Document } from 'mongoose';

  type AsyncResult = Promise<any>;

  export interface Controller {
    all?: () => AsyncResult;
    find?: (id: any) => AsyncResult;
    create?: (body: any) => AsyncResult;
    update?: (body: any) => AsyncResult;
    delete?: (id: any) => AsyncResult;
  }
  export interface User extends Document {
    id: number;
    email: string;
    username: string;
    password: string;

    isValidPassword: (password: string) => Promise<boolean>;
  }

  export type Token = string;

  export type TokenDecoded = TokenPayload | undefined;

  export interface TokenPayload {
    username: string;
    expires: number;
  }
}
