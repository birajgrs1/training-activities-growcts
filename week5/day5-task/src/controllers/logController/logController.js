import * as logService from '../../services/logService/logService.js';

export async function createLog(req, res) {
  await logService.logEvent(req.body.type, req.body.message, req.body.meta);
  res.status(201).json({ message: 'Log recorded' });
}