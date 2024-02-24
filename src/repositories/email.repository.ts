import Email from '../models/email.model';
import IEmail from '../interfaces/email.interface';

class EmailRepository {
  public async create(emailData: Partial<IEmail>): Promise<IEmail> {
    return Email.create(emailData);
  }

  public async findByMessageId(messageId: string): Promise<IEmail | null> {
    return Email.findOne({ messageId });
  }
}

export default new EmailRepository();
