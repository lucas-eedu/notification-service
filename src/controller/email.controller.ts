import { Request, Response } from 'express';
import { execute } from '../services/email/send.email.service';

class EmailController {
  async send(req: Request, res: Response): Promise<void> {
    const { to, subject, html, product } = req.body;

    try {
      await execute(to, subject, html, product);
      res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      res.status(500).json({ message: 'Erro ao enviar e-mail.' });
    }
  }
}

export default new EmailController();
