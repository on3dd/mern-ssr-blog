import mongoose from 'mongoose';

export default class Db {
  private static instance: Db;

  private constructor() {}

  public connect(url: string) {
    return mongoose.connect(url, {
      authSource: "admin",
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
  }

  public static getInstance(): Db {
    if (!Db.instance) {
      Db.instance = new Db();
    }

    return Db.instance;
  }
}
