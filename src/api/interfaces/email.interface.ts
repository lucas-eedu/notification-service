import { Document } from 'mongoose';

export default interface IEmail extends Document {
  id: string;
  from: string;
  to: string | string[];
  product: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}
