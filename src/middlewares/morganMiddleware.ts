import morgan, { StreamOptions } from 'morgan';
import Logger from '../config/logger';
import { RequestHandler } from 'express';

const stream: StreamOptions = {
  write: (message) => Logger.http(message),
};

const skip = (): boolean => {
  const env = process.env.APP_STAGE || 'development';
  return env !== 'development';
};

const morganMiddleware: RequestHandler = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream, skip },
);

export default morganMiddleware;
