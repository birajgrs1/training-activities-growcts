import express from 'express';
import {
  getClients,
  getClient,
  createClientHandler,
  updateClientHandler,
  deleteClientHandler,
} from '../controllers/clientsController.js';

const router = express.Router();


router.get('/clients', getClients);
router.get('/clients/:id', getClient);
router.post('/clients', createClientHandler);
router.put('/clients/:id', updateClientHandler);
router.delete('/clients/:id', deleteClientHandler);

export default router;


