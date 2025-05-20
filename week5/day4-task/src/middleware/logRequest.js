import fs from 'fs';
import path from 'path';
import morgan from 'morgan';

const accessLogStream = fs.createWriteStream(
  path.join('logs', 'access.log'),
  { flags: 'a' }
);

export const loggerMiddleware = morgan('combined', {
  stream: accessLogStream,
});
