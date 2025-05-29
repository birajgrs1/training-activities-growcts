import express from 'express';
import { runMonthlySummaryJob, getCronStatus } from '../cron/cronJobs.js';

const cronRouter = express.Router();

cronRouter.get('/status', (req, res) => {
  res.json(getCronStatus());
});

cronRouter.post('/runJob', async (req, res, next) => {
  try {
    await runMonthlySummaryJob();
    res.json({ message: 'Cron job manually triggered' });
  } catch (err) {
    next(err);
  }
});

export default cronRouter;
