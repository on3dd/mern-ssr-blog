type AsyncResult = Promise<unknown>;

export default interface Controller {
  all?: () => AsyncResult;
  find?: (id: unknown) => AsyncResult;
  create?: (body: unknown) => AsyncResult;
  update?: (body: unknown) => AsyncResult;
  delete?: (id: unknown) => AsyncResult;
}
