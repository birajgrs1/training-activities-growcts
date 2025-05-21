import fs from 'fs-extra';
const FILE = './src/data/logs.json';

export async function logEvent(type, message, meta = {}) {
  const logs = await fs.readJson(FILE).catch(() => []);
  logs.push({ timestamp: new Date().toISOString(), type, message, ...meta });
  await fs.writeJson(FILE, logs);
}
