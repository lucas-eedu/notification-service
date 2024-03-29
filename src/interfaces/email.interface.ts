import { Document } from 'mongoose';

export default interface IEmail extends Document {
  messageId: string;
  to: string;
  subject: string;
  html: string;
  product: string;
  status: string;
}
