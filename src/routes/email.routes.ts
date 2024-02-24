import express from 'express';
import emailValidation from '../validations/email.validator.schema';
import EmailController from '../controller/email.controller';

const router = express.Router();

router.post('/send', emailValidation, EmailController.send);
router.post('/webhook', EmailController.update);

export default router;
