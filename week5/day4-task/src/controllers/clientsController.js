import {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
  searchClients,
} from "../services/services.js";

import { validateClients } from "../utils/validateClients.js";
import { ConflictError } from "../utils/customErrors.js";

export async function getClients(req, res) {
  try {
    const { name } = req.query;
    const clients = name
      ? await searchClients({ name })
      : await getAllClients();
    res.status(200).json(clients);
  } catch (error) {
    console.error("Error in getClients:", error);
    res.status(500).json({ message: "Failed to retrieve clients" });
  }
}

export async function getClient(req, res) {
  try {
    const client = await getClientById(req.params.id);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.status(200).json(client);
  } catch (error) {
    console.error("Error in getClient:", error);
    res.status(500).json({ message: "Failed to retrieve client" });
  }
}

export async function createClientHandler(req, res) {
  try {
    const validationError = validateClients(req.body);
    if (validationError) {
      return res.status(400).json({ message: validationError });
    }

    const newClient = await createClient(req.body);
    res.status(201).json(newClient);
  } catch (error) {
    if (error instanceof ConflictError) {
      return res.status(409).json({ message: error.message });
    }
    console.error("Error in createClientHandler:", error);
    res.status(500).json({ message: "Failed to create client" });
  }
}

export async function updateClientHandler(req, res) {
  try {
    const validationError = validateClients(req.body);
    if (validationError) {
      return res.status(400).json({ message: validationError });
    }

    const updatedClient = await updateClient(req.params.id, req.body);
    if (!updatedClient) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json(updatedClient);
  } catch (error) {
    if (error instanceof ConflictError) {
      return res.status(409).json({ message: error.message });
    }
    console.error("Error in updateClientHandler:", error);
    res.status(500).json({ message: "Failed to update client" });
  }
}

export async function deleteClientHandler(req, res) {
  try {
    const deletedClient = await deleteClient(req.params.id);
    if (!deletedClient) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json(deletedClient);
  } catch (error) {
    console.error("Error in deleteClientHandler:", error);
    res.status(500).json({ message: "Failed to delete client" });
  }
}
