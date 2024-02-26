import Twilio from 'twilio';
import SMSRepository from '../../repositories/sms.repository';
import ISMS from '../../interfaces/sms.interface';
import Logger from '../../config/logger';

class SendSMSService {
  public async execute(
    to: string,
    body: string,
    product: string,
  ): Promise<ISMS> {
    try {
      const client = Twilio(
        process.env.TWILIO_SID,
        process.env.TWILIO_AUTH_TOKEN,
      );

      const msg = {
        from: process.env.TWILIO_PHONE || '+99999999999',
        to,
        body,
      };

      const response = await client.messages.create(msg);

      const messageId = response?.sid;

      if (!messageId) {
        throw new Error('Failed to send SMS: missing twilio sID.');
      }

      const status = response?.status === 'queued' ? 'pending' : undefined;

      if (!status) {
        throw new Error('Failed to send SMS: unexpected status.');
      }

      return SMSRepository.create({
        messageId,
        to,
        body,
        product,
        status,
      });
    } catch (error) {
      Logger.error('Error sending SMS:', error);
      throw new Error('Error sending SMS.');
    }
  }
}

export default SendSMSService;
