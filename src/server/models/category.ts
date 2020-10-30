import { Schema, model } from 'mongoose';
import autoincrement from '@server/utils/autoincrement';

const schema = new Schema({
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
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

schema.pre('save', autoincrement);

export default model('Category', schema);
