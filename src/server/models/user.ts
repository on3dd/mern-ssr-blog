import { Schema, model } from 'mongoose';
import { hash, compare } from 'bcrypt';

import { User } from '@server';

import autoincrement from '@server/utils/autoincrement';

const schema = new Schema<User>({
  id: {
    type: Number,
    unique: true,
    min: 1,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

schema.pre<User>('save', autoincrement);

schema.pre<User>('save', async function (next) {
  this.password = await hash(this.password, 10);

  next();
});

schema.methods.isValidPassword = async function (
  password: string,
) {
  return await compare(password, this.password);
};

export default model<User>('User', schema);
