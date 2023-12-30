import { Schema, Document, models, model } from 'mongoose';

export interface IUser extends Document {
}

const UserSchema = new Schema({

});

export const User = models.User || model('Question', UserSchema);
