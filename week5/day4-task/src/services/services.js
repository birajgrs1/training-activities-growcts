import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import { ConflictError, NotFoundError } from "../utils/customErrors.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientsData = path.resolve(__dirname, "../data/clients.json");
async function getAllClients() {
  const data = await fs.readFile(clientsData, "utf-8");
  return JSON.parse(data);
}

async function getClientById(id) {
  const clients = await getAllClients();
  return clients.find((client) => client.id === id);
}

async function createClient(clientData) {
  const clients = await getAllClients();
  const emailExists = clients.some((c) => c.email === clientData.email);
  if (emailExists) throw new ConflictError("Email already exists");

  const newClient = { id: uuidv4(), ...clientData };
  clients.push(newClient);
  await fs.writeFile(clientsData, JSON.stringify(clients, null, 2));
  return newClient;
}

async function updateClient(id, clientData) {
  const clients = await getAllClients();
  const index = clients.findIndex(client => client.id === id);
  if (index === -1) return null;
  const emailExists = clients.some(
    (c) => c.email === clientData.email && c.id !== id
  );
  if (emailExists) throw new ConflictError("Email already exists");
  clients[index] = { ...clients[index], ...clientData };
  await fs.writeFile(clientsData, JSON.stringify(clients, null, 2));

  return clients[index];
}

async function deleteClient(id) {
  const clients = await getAllClients();
  const index = clients.findIndex((client) => client.id === id);
  if (index === -1) return null;
  const [deletedClient] = clients.splice(index, 1);
  await fs.writeFile(clientsData, JSON.stringify(clients, null, 2));
  return deletedClient;
}

async function searchClients({ name }) {
  const clients = await getAllClients();
  return clients.filter((client) =>
    client.name.toLowerCase().includes(name.toLowerCase())
  );
}

export {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
  searchClients,
};
