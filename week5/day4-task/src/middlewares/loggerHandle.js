import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const accessLogStream = createWriteStream(
  join(__dirname, '../logs/access.log'),
  { flags: 'a' }
);

function loggerHandle(req, res, next) {
  const log = `${new Date().toISOString()} ${req.ip} ${req.method} ${req.originalUrl}\n`;
  accessLogStream.write(log);
  next();
}

export default loggerHandle;
