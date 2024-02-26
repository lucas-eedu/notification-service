import { Document } from 'mongoose';

export default interface IEmail extends Document {
  messageId: string;
  to: string;
  body: string;
  product: string;
  status: string;
}
