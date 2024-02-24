import UpdateEmailService from './update.email.service';
import EmailRepository from '../../repositories/email.repository';

describe('UpdateEmailService', () => {
  it('should update email status successfully', async () => {
    const sg_message_id = 'example_message_id';
    const event = 'delivered';

    const mockFindByMessageId = jest
      .spyOn(EmailRepository, 'findByMessageId')
      .mockResolvedValueOnce({
        _id: 'example_id',
        status: 'pending',
        save: jest.fn().mockResolvedValueOnce({}),
      } as any);

    const updateEmailService = new UpdateEmailService();
    await updateEmailService.execute(sg_message_id, event);

    expect(mockFindByMessageId).toHaveBeenCalledWith('example_message_id');
    expect(mockFindByMessageId).toHaveBeenCalledTimes(1);
  });
});
