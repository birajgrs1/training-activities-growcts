import fs from 'fs-extra';
import { v4 as uuidv4 } from 'uuid';
const FILE = './src/data/sessions.json';

export async function saveSession(req) {
  const sessions = await fs.readJson(FILE).catch(() => []);
  sessions.push({
    id: uuidv4(),
    userId: req.session.user.id,
    timestamp: new Date().toISOString(),
    ip: req.ip,
    userAgent: req.get('User-Agent')
  });
  await fs.writeJson(FILE, sessions);
}

export async function getSessionsByUser(userId) {
  const sessions = await fs.readJson(FILE).catch(() => []);
  return sessions.filter(s => s.userId === userId);
}
