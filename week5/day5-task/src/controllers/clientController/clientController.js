import * as clientService from '../../services/clientService/clientService.js';

export async function getAllClients(req, res) {
  const clients = await clientService.getClients();
  res.json(clients);
}

export async function getClient(req, res) {
  const client = await clientService.getClient(req.params.id);
  if (!client) return res.status(404).json({ error: 'Client not found' });
  res.json(client);
}

export async function createClient(req, res) {
  try {
    const client = await clientService.createClient(req.body);
    res.status(201).json(client);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

export async function updateClient(req, res) {
  try {
    const client = await clientService.updateClient(req.params.id, req.body);
    if (!client) return res.status(404).json({ error: 'Client not found' });
    res.json(client);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

export async function deleteClient(req, res) {
  const success = await clientService.deleteClient(req.params.id);
  if (!success) return res.status(404).json({ error: 'Client not found' });
  res.json({ message: 'Client deleted' });
}