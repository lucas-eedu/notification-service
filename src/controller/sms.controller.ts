import { Request, Response } from 'express';
import SendSMSService from '../services/sms/send.sms.service';
import Logger from '../config/logger';

class SMSController {
  public async send(req: Request, res: Response): Promise<void> {
    const { to, body, product } = req.body;
    const sendSMS = new SendSMSService();

    try {
      const { _id, messageId } = await sendSMS.execute(to, body, product);

      res.status(201).json({
        id: _id,
        messageId: messageId,
        message: 'SMS sent successfully',
      });
    } catch (error) {
      Logger.error('Error sending SMS:', error);
      res.status(500).json({ message: 'Error sending SMS' });
    }
  }
}

export default new SMSController();
