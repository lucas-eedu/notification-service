import sgMail from '@sendgrid/mail';
import EmailRepository from '../../repositories/email.repository';
import IEmail from '../../interfaces/email.interface';
import Logger from '../../config/logger';

class SendEmailService {
  public async execute(
    to: string,
    subject: string,
    html: string,
    product: string,
  ): Promise<IEmail> {
    try {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

      const msg = {
        to,
        from: process.env.SENDGRID_MAIL_FROM_ADDRESS || 'default@example.com',
        subject,
        html,
      };

      const [response] = await sgMail.send(msg);
      const messageId = response?.headers?.['x-message-id'];

      const status = response?.statusCode === 202 ? 'pending' : undefined;

      if (!messageId || !status) {
        throw new Error('Failed to send email.');
      }

      return EmailRepository.create({
        messageId,
        to,
        subject,
        html,
        product,
        status,
      });
    } catch (error) {
      Logger.error('Error sending email:', error);
      throw new Error('Error sending email.');
    }
  }
}

export default SendEmailService;
