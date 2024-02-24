import EmailRepository from '../../repositories/email.repository';

class UpdateEmailService {
  public async execute(sg_message_id: string, event: string): Promise<void> {
    try {
      const messageId = sg_message_id.split('.')[0];
      const emailDocument = await EmailRepository.findByMessageId(messageId);

      if (!emailDocument) {
        throw new Error('E-mail not found');
      }

      emailDocument.status = event;

      await emailDocument.save();
    } catch (error) {
      console.error('Error updating e-mail:', error);
      throw new Error('Error updating e-mail.');
    }
  }
}

export default UpdateEmailService;
