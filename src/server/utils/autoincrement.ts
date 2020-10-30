import { Document, HookNextFunction } from 'mongoose';
import autoIncrementModelID from '@server/models/counter';

export default function autoincrement(
  this: Document,
  next: HookNextFunction,
) {
  if (!this.isNew) {
    return next();
  }

  autoIncrementModelID('activities', this, next);
}
