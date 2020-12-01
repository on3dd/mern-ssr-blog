declare module '@server' {
  type AsyncResult = Promise<any>;

  export interface Controller {
    all?: () => AsyncResult;
    find?: (id: any) => AsyncResult;
    create?: (body: any) => AsyncResult;
    update?: (body: any) => AsyncResult;
    delete?: (id: any) => AsyncResult;
  }
}
