import 'dotenv/config';
import express from 'express';
import Logger from './api/config/logger';
import { db } from './api/config/mongoose';
import morganMiddleware from './api/middlewares/morganMiddleware';
import router from './api/routes/main.routes';

const app = express();

app.use(express.json());
app.use(morganMiddleware);
app.use('/api', router);

const PORT = process.env.APP_PORT || 3000;

db.once('open', () => {
  app.listen(PORT, () => {
    Logger.info(`API Working => ${process.env.APP_URL}:${PORT}/api`);
  });
});
