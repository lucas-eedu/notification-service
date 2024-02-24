import sgMail from '@sendgrid/mail';
import emailRepository from '../../repositories/email.repository';

export async function execute(
  to: string,
  subject: string,
  html: string,
  product: string,
): Promise<void> {
  try {
    await emailRepository.create({
      to,
      subject,
      html,
      product,
      status: 'pending',
    });

    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

    const msg = {
      to,
      from: process.env.SENDGRID_MAIL_FROM_ADDRESS || 'default@example.com',
      subject,
      html,
    };

    await sgMail.send(msg);
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    throw new Error('Erro ao enviar e-mail.');
  }
}
