import * as sessionService from '../../services/sessionService/sessionService.js';

export async function getSessions(req, res) {
  const { userId } = req.params;
  const sessions = await sessionService.getSessionsByUser(userId);
  res.json(sessions);
}
