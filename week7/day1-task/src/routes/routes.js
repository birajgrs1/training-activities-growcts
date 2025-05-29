import express from 'express';
import * as controller from '../controllers/controllers.js';

const router = express.Router();

router.post('/employees', controller.createEmployee);
router.get('/employees', controller.getEmployees);
router.get('/employees/:id', controller.getEmployeeById);
router.put('/employees/:id', controller.updateEmployee);
router.delete('/employees/:id', controller.deleteEmployee);

router.post('/departments', controller.createDepartment);

router.post('/payroll', controller.createPayroll);
router.get('/payroll', controller.getPayroll);

router.get('/audit-logs', controller.getAuditLogs);

export default router;
