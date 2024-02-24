import EmailRepository from './email.repository';
import Email from '../models/email.model';

jest.mock('../models/email.model');

describe('EmailRepository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create an email document', async () => {
    const emailData = {
      to: 'test@example.com',
      subject: 'Test Subject',
      html: '<p>Test HTML Content</p>',
      product: 'Test Product',
      status: 'pending',
    };

    (Email.create as jest.Mock).mockResolvedValueOnce(emailData);

    const createdEmail = await EmailRepository.create(emailData);

    expect(Email.create).toHaveBeenCalledWith(emailData);
    expect(createdEmail).toEqual(emailData);
  });

  it('should find an email document by messageId', async () => {
    const messageId = 'test_message_id';
    const emailData = {
      to: 'test@example.com',
      subject: 'Test Subject',
      html: '<p>Test HTML Content</p>',
      product: 'Test Product',
      status: 'pending',
    };

    (Email.findOne as jest.Mock).mockResolvedValueOnce(emailData);

    const foundEmail = await EmailRepository.findByMessageId(messageId);

    expect(Email.findOne).toHaveBeenCalledWith({ messageId });
    expect(foundEmail).toEqual(emailData);
  });

  it('should return null when email document with messageId is not found', async () => {
    const messageId = 'non_existent_message_id';

    (Email.findOne as jest.Mock).mockResolvedValueOnce(null);

    const foundEmail = await EmailRepository.findByMessageId(messageId);

    expect(Email.findOne).toHaveBeenCalledWith({ messageId });
    expect(foundEmail).toBeNull();
  });
});
