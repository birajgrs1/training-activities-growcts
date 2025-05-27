import express from 'express';
import {
    createEmployee,
    getEmployees,
    createDepartment,
    createPayroll,
    getPayroll
} from '../controllers/controllers.js';

const router = express.Router();

router.post('/employees', createEmployee);
router.get('/employees', getEmployees);
router.post('/departments', createDepartment);
router.post('/payroll', createPayroll);
router.get('/payroll', getPayroll);


export default router;