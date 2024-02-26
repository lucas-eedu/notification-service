import { Router } from 'express';
import emailRoutes from './email.routes';
import smsRoutes from './sms.routes';

const routes = Router();

routes.use('/email', emailRoutes);
routes.use('/sms', smsRoutes);

export default routes;
