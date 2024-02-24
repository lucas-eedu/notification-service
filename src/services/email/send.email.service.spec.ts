import sgMail from '@sendgrid/mail';
import SendEmailService from '../../../src/services/email/send.email.service';
import EmailRepository from '../../../src/repositories/email.repository';

jest.mock('@sendgrid/mail');

describe('SendEmailService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should send email successfully and return created email document', async () => {
    const to = 'test@example.com';
    const subject = 'Test Subject';
    const html = '<p>Test HTML Content</p>';
    const product = 'Test Product';

    const mockResponse = [
      {
        statusCode: 202,
        body: '',
        headers: {
          server: 'nginx',
          date: 'Sat, 24 Feb 2024 18:26:36 GMT',
          'content-length': '0',
          connection: 'keep-alive',
          'x-message-id': 'cZOcFIJJRoqE1OQPktJX7g',
          'access-control-allow-origin': 'https://sendgrid.api-docs.io',
          'access-control-allow-methods': 'POST',
          'access-control-allow-headers':
            'Authorization, Content-Type, On-behalf-of, x-sg-elas-acl',
          'access-control-max-age': '600',
          'x-no-cors-reason':
            'https://sendgrid.com/docs/Classroom/Basics/API/cors.html',
          'strict-transport-security': 'max-age=600; includeSubDomains',
        },
      },
      {},
    ];

    (
      sgMail.send as jest.MockedFunction<typeof sgMail.send>
    ).mockResolvedValueOnce(mockResponse as any);

    const mockCreate = jest
      .spyOn(EmailRepository, 'create')
      .mockResolvedValueOnce({
        _id: 'test_id',
        messageId: 'cZOcFIJJRoqE1OQPktJX7g',
        to,
        subject,
        html,
        product,
        status: 'pending',
      } as any);

    const sendEmailService = new SendEmailService();

    const result = await sendEmailService.execute(to, subject, html, product);

    expect(sgMail.setApiKey).toHaveBeenCalled();

    expect(sgMail.send).toHaveBeenCalledWith({
      to,
      from: expect.any(String),
      subject,
      html,
    });

    expect(mockCreate).toHaveBeenCalledWith({
      messageId: 'cZOcFIJJRoqE1OQPktJX7g',
      to,
      subject,
      html,
      product,
      status: 'pending',
    });

    expect(result).toEqual({
      _id: 'test_id',
      messageId: 'cZOcFIJJRoqE1OQPktJX7g',
      to,
      subject,
      html,
      product,
      status: 'pending',
    });
  });
});
