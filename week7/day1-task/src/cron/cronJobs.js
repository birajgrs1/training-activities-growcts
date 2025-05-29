import cron from 'node-cron';
import fs from 'fs';
import path from 'path';
import { Employee } from '../models/Employee.js';
import { Payroll } from '../models/Payroll.js';

const logsDir = path.resolve('src/logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

let lastRunStatus = {
  time: null,
  status: 'Not run yet',
  error: null,
};

const logError = (message) => {
  const logPath = path.join(logsDir, 'cron_errors.log');
  fs.appendFileSync(logPath, `${new Date().toISOString()} - ${message}\n`);
};

const logStaleEmployees = async () => {
  const cutoff = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000);
  const stale = await Employee.find({ updatedAt: { $lt: cutoff } });
  const logPath = path.join(logsDir, 'stale_employees.log');
  stale.forEach(e => {
    fs.appendFileSync(logPath, `${new Date().toISOString()} - Stale Employee: ${e.name}, ID: ${e._id}\n`);
  });
};

export const runMonthlySummaryJob = async () => {
  try {
    const now = new Date();
    const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, 1);

    const newEmployees = await Employee.find({ createdAt: { $gte: oneMonthAgo } });
    const terminatedEmployees = await Employee.find({ terminated: { $gte: oneMonthAgo } });

    const payrollTotal = await Payroll.aggregate([
      { $group: { _id: null, total: { $sum: '$netPay' } } },
    ]);

    const report = {
      generatedAt: now.toISOString(),
      newEmployees: newEmployees.map(e => ({ id: e._id, name: e.name })),
      terminatedEmployees: terminatedEmployees.map(e => ({ id: e._id, name: e.name })),
      payrollTotal: payrollTotal[0]?.total || 0,
    };

    fs.writeFileSync(path.join(logsDir, 'monthly_summary.json'), JSON.stringify(report, null, 2));

    await logStaleEmployees();

    lastRunStatus = { time: now.toISOString(), status: 'Success', error: null };
  } catch (err) {
    lastRunStatus = { time: new Date().toISOString(), status: 'Failed', error: err.message };
    logError(err.message);
  }
};

export const scheduleCronJobs = () => {
  cron.schedule('0 0 * * *', runMonthlySummaryJob);
};

export const getCronStatus = () => lastRunStatus;
