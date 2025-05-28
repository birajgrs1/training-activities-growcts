import express from 'express';
import * as controller from '../controllers/controllers.js';

const router = express.Router();

router.post('/employees', controller.createEmployee);
router.get('/employees', controller.getEmployees);
router.get('/employees/statistics', controller.employeeStatistics);
router.get('/employees/salary-range', controller.employeeSalaryRange);
router.get('/employees/estimated-count', controller.estimatedVsCount);
router.get('/employees/netpay', controller.paginatedByNetPay);

router.post('/departments', controller.createDepartment);
router.get('/departments/:id/employees/stats', controller.departmentEmployeeStats);

router.post('/payroll', controller.createPayroll);
router.get('/payroll', controller.getPayroll);

export default router;
