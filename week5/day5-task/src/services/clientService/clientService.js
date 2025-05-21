import fs from 'fs-extra';
import { v4 as uuidv4 } from 'uuid';
const FILE = './src/data/clients.json';

export async function getClients() {
  return await fs.readJson(FILE).catch(() => []);
}

export async function getClient(id) {
  const clients = await getClients();
  return clients.find(c => c.id === id);
}

export async function createClient(data) {
  const clients = await getClients();
  const client = { id: uuidv4(), ...data };
  clients.push(client);
  await fs.writeJson(FILE, clients);
  return client;
}

export async function updateClient(id, updates) {
  const clients = await getClients();
  const index = clients.findIndex(c => c.id === id);
  if (index === -1) return null;
  clients[index] = { ...clients[index], ...updates };
  await fs.writeJson(FILE, clients);
  return clients[index];
}

export async function deleteClient(id) {
  const clients = await getClients();
  const newClients = clients.filter(c => c.id !== id);
  if (clients.length === newClients.length) return false;
  await fs.writeJson(FILE, newClients);
  return true;
}
