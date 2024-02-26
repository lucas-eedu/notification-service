import mongoose, { Schema } from 'mongoose';
import ISMS from '../interfaces/sms.interface';

const SMSSchema: Schema = new Schema({
  messageId: { type: String, required: true },
  to: { type: String, required: true },
  body: { type: String, required: true },
  product: { type: String, required: true },
  status: { type: String, required: true, default: 'pending' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default mongoose.model<ISMS>('SMS', SMSSchema);
