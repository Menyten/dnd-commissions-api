require('dotenv').config();
import connectToDb from './db/connectToDb';
import startServer from './server';

connectToDb().once('open', () => {
  console.log('Connected to DB');
  startServer();
});
