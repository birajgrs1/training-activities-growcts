import fs from 'fs-extra';
const FILE = './src/data/devices.json';

export async function saveDevice(req) {
  const devices = await fs.readJson(FILE).catch(() => []);
  const device = {
    userId: req.session.user.id,
    userAgent: req.get('User-Agent'),
    ip: req.ip,
    timestamp: new Date().toISOString()
  };
  devices.push(device);
  await fs.writeJson(FILE, devices);
}

export async function getDevices(userId) {
  const devices = await fs.readJson(FILE).catch(() => []);
  return devices.filter(d => d.userId === userId);
}
