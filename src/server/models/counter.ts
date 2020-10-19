import { Schema, model, Document } from 'mongoose';

const counterSchema = new Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

counterSchema.index({ _id: 1, seq: 1 }, { unique: true });

const counterModel = model('Counter', counterSchema);

const autoIncrementModelID = (
  modelName: string,
  doc: Document,
  next: Function,
) => {
  counterModel.findByIdAndUpdate(
    modelName, // The ID to find for in counters model
    { $inc: { seq: 1 } }, // The update
    { new: true, upsert: true }, // The options
    (error, counter: any) => {
      if (error) {
        return next(error);
      }

      doc.id = counter.seq;

      next();
    },
  );
};

export default autoIncrementModelID;
