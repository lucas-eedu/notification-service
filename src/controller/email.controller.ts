import { Request, Response } from 'express';
import SendEmailService from '../services/email/send.email.service';
import UpdateEmailService from '../services/email/update.email.service';

class EmailController {
  public async send(req: Request, res: Response): Promise<void> {
    const { to, subject, html, product } = req.body;
    const sendEmail = new SendEmailService();

    try {
      const { _id, messageId } = await sendEmail.execute(
        to,
        subject,
        html,
        product,
      );

      res.status(201).json({
        id: _id,
        messageId: messageId,
        message: 'Email sent successfully',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    const { sg_message_id, event } = req.body[0];
    const updateEmail = new UpdateEmailService();

    try {
      await updateEmail.execute(sg_message_id, event);
      res.status(204).json({});
    } catch (error) {
      console.error('Error updating email status:', error);
      res.status(500).json({ message: 'Error updating email status' });
    }
  }
}

export default new EmailController();
