import express from 'express';
import {
  getAllClients,
  getClient,
  createClient,
  updateClient,
  deleteClient
} from '../../controllers/clientController/clientController.js';

const router = express.Router();

router.get('/', getAllClients);
router.get('/:id', getClient);
router.post('/', createClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

export default router;
