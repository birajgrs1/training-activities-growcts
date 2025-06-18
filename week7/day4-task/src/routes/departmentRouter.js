import express from 'express';
import { authenticate } from '../middlewares/authMiddleware.js';
import { requireRole } from '../middlewares/roleMiddleware.js';

const departmentRouter = express.Router();

departmentRouter.use(authenticate, requireRole('admin'));

departmentRouter.get('/', (req, res) => res.json({ message: 'Department List' }));
departmentRouter.post('/', (req, res) => res.json({ message: 'Department Created' }));

export default departmentRouter;
