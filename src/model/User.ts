import { Schema, model } from 'mongoose';
import { IUser } from '../types';

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export default model<IUser>("User", UserSchema)