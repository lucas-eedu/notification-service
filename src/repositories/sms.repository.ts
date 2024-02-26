import SMS from '../models/sms.model';
import ISMS from '../interfaces/sms.interface';

class SMSRepository {
  public async create(smsData: Partial<ISMS>): Promise<ISMS> {
    return SMS.create(smsData);
  }

  public async findByMessageId(messageId: string): Promise<ISMS | null> {
    return SMS.findOne({ messageId });
  }
}

export default new SMSRepository();
