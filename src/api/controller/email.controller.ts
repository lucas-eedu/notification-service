import { Request, Response } from 'express';
import CreateEmailService from '../services/email/create.email.service';

class EmailController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const emailData = req.body;
      const email = await CreateEmailService.execute(emailData);
      res.status(200).json(email);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default new EmailController();
