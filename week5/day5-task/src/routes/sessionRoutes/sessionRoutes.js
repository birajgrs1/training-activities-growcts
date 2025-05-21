import express from 'express';
import { getSessions } from '../../controllers/sessionController/sessionController.js';
const router = express.Router();

router.get('/:userId', getSessions);
export default router;