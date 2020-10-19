import { Schema, model } from 'mongoose';
import autoIncrementModelID from '@server/models/counter';

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
  date: {
    type: Date,
    default: Date.now,
  },
});

schema.pre('save', function (next) {
  if (!this.isNew) {
    return next();
  }

  autoIncrementModelID('activities', this, next);
});

export default model('Post', schema);
