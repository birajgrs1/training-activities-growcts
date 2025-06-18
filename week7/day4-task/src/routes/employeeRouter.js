import express from 'express';
import { authenticate } from '../middlewares/authMiddleware.js';
import { requireSelfOrAdmin } from '../middlewares/roleMiddleware.js';
import Employee from '../models/Employee.js';

const empRouter = express.Router();

empRouter.use(authenticate);

empRouter.get('/me', (req, res) => {
  res.json(req.user);
});

empRouter.put('/:id', requireSelfOrAdmin, async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

export default empRouter;
