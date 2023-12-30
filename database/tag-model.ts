import { Schema, Document, models, model } from 'mongoose';

export interface ITag extends Document {
  name: string;
  description: Schema.Types.ObjectId[];
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdOn: Date;
}

const TagSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: [{ type: String, required: true }],
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdOn: { type: Date, default: Date.now },
});

export const Tag = models.Tag || model('Tag', TagSchema);
