import { Router } from 'express';
import emailRoutes from './email.routes';

const routes = Router();

routes.use('/email', emailRoutes);

export default routes;
