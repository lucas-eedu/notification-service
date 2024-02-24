import EmailRepository from '../../repositories/email.repository';
import IEmail from '../../interfaces/email.interface';

class CreateEmailService {
  async execute(emailData: Partial<IEmail>): Promise<IEmail> {
    const email = await EmailRepository.create(emailData);
    return email;
  }
}

export default new CreateEmailService();
