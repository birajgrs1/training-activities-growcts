import express from 'express';
import * as controller from '../controllers/controllers.js';

const router = express.Router();

router.post('/employees', controller.createEmployee);
router.get('/employees', controller.getEmployees);
router.post('/departments', controller.createDepartment);
router.post('/payroll', controller.createPayroll);
router.get('/payroll', controller.getPayroll);

export default router;
