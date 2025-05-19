
import {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
  searchClients,
} from "../services/services.js";

import {validateClients} from "../utils/validateClients.js";

export async function getClients(req, res) {
  try {
    const { name } = req.query;
    const clients = name ? await searchClients({ name }) : await getAllClients();
    res.status(200).json(clients);
  } catch {
    res.status(500).json({ message: 'Failed to retrieve clients' });
  }
}

export async function getClient(req, res) {
  try {
    const client = await getClientById(req.params.id);
    client
      ? res.status(200).json(client)
      : res.status(404).json({ message: 'Client not found' });
  } catch {
    res.status(500).json({ message: 'Failed to retrieve client' });
  }
}

export async function createClientHandler(req, res) {
  try {
    const validationError = validateClients(req.body);
    if (validationError) return res.status(400).json({ message: validationError });
    const newClient = await createClient(req.body);
    res.status(201).json(newClient);
  } catch {
    res.status(500).json({ message: 'Failed to create client' });
  }
}

export async function updateClientHandler(req, res) {
  try {
    const validationError = validateClients(req.body);
    if (validationError) return res.status(400).json({ message: validationError });
    const updatedClient = await updateClient(req.params.id, req.body);
    updatedClient
      ? res.status(200).json(updatedClient)
      : res.status(404).json({ message: 'Client not found' });
  } catch {
    res.status(500).json({ message: 'Failed to update client' });
  }
}

export async function deleteClientHandler(req, res) {
  try {
    const deletedClient = await deleteClient(req.params.id);
    deletedClient
      ? res.status(200).json(deletedClient)
      : res.status(404).json({ message: 'Client not found' });
  } catch {
    res.status(500).json({ message: 'Failed to delete client' });
  }
}
