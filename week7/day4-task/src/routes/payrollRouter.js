import express from 'express';
import { authenticate } from '../middlewares/authMiddleware.js';
import { requireRole } from '../middlewares/roleMiddleware.js';

const payrollRouter = express.Router();

payrollRouter.use(authenticate, requireRole('admin'));

payrollRouter.get('/', (req, res) => res.json({ message: 'Payroll Info' }));
payrollRouter.post('/', (req, res) => res.json({ message: 'Payroll Added' }));

export default payrollRouter;
