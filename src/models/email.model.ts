import mongoose, { Schema } from 'mongoose';
import IEmail from '../interfaces/email.interface';

const EmailSchema: Schema = new Schema({
  to: { type: String, required: true },
  subject: { type: String, required: true },
  html: { type: String, required: true },
  product: { type: String, required: true },
  status: { type: String, required: true, default: 'pending' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default mongoose.model<IEmail>('Email', EmailSchema);
