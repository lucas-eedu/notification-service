import express from 'express';
import emailValidation from '../validations/email.validator.schema';
import EmailController from '../controller/email.controller';

const router = express.Router();

router.post('/create', emailValidation, EmailController.create);

export default router;
