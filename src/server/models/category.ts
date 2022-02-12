import { Schema, model } from 'mongoose';
import { Category } from '@server';

import autoincrement from '@server/utils/autoincrement';

const schema = new Schema<Category>({
  id: {
    type: Number,
    unique: true,
    min: 1,
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

schema.pre<Category>('save', autoincrement);

export default model<Category>('Category', schema);
