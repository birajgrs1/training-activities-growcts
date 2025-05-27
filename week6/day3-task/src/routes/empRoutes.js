import express from 'express';
import {
    createEmployee,
    getEmployees,
    createDepartment
} from '../controllers/controllers.js';

const router = express.Router();

router.post('/employees', createEmployee);
router.get('/employees', getEmployees);
router.post('/departments', createDepartment);

export default router;