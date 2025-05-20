import fs from 'fs';
import path from 'path';

const errorLogPath = path.resolve('logs/error.log');

export function errorHandler(err, req, res, next) {
  const status = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  const log = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${status} - ${message}\n`;

  fs.appendFile(errorLogPath, log, (e) => {
    if (e) console.error('Failed to write to error.log');
  });

  res.status(status).json({ error: message });
}
