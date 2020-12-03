import { Schema, model } from 'mongoose';
import autoincrement from '@server/utils/autoincrement';

const schema = new Schema({
  id: {
    type: Number,
    unique: true,
    min: 1,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

schema.pre('save', autoincrement);

export default model('Post', schema);
