import mongoose from 'mongoose';
import Logger from './logger';

mongoose.connect('mongodb://localhost:27017/notification-service');

const db = mongoose.connection;

db.on('error', (error) => Logger.error('Error connecting to MongoDB:', error));
db.once('open', () => Logger.info('Connected to MongoDB successfully!'));

export { mongoose, db };
