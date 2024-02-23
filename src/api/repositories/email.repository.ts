import Email from '../models/email.model';
import IEmail from '../interfaces/email.interface';

class EmailRepository {
  async create(emailData: Partial<IEmail>): Promise<IEmail> {
    return Email.create(emailData);
  }
}

export default new EmailRepository();
