import express from 'express';
import smsValidation from '../validations/sms.validator.schema';
import SMSController from '../controller/sms.controller';

const router = express.Router();

router.post('/send', smsValidation, SMSController.send);

export default router;
