import { AuditLog } from '../models/AuditLog.js';
import { Employee } from '../models/Employee.js';
import { Department } from '../models/Department.js';
import { Payroll } from '../models/Payroll.js';
import { createEmployeeWithPayroll } from '../services/transactionService.js';

const logAudit = async (action, entity, entityId, performedBy = 'system', details = {}) => {
  try {
    await AuditLog.create({ action, entity, entityId, performedBy, details });
  } catch (err) {
    console.error('AuditLog error:', err.message);
  }
};

export const createEmployee = async (req, res, next) => {
  try {
    const employee = await createEmployeeWithPayroll(req.body.employee, req.body.payroll);
    await logAudit('CREATE', 'Employee', employee._id, req.user?.email || 'system', { employee });
    res.status(201).json(employee);
  } catch (err) {
    next(err);
  }
};

export const getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find()
      .populate('departmentId')
      .populate('payrolls');
    res.json(employees);
  } catch (err) {
    next(err);
  }
};

export const getEmployeeById = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id)
      .populate('departmentId')
      .populate('payrolls');
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (err) {
    next(err);
  }
};

export const updateEmployee = async (req, res, next) => {
  try {
    const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    await logAudit('UPDATE', 'Employee', updated._id, req.user?.email || 'system', { updatedFields: req.body });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const deleteEmployee = async (req, res, next) => {
  try {
    const deleted = await Employee.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    await logAudit('DELETE', 'Employee', deleted._id, req.user?.email || 'system', { deleted });
    res.json({ message: 'Employee deleted' });
  } catch (err) {
    next(err);
  }
};

export const createDepartment = async (req, res, next) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json(department);
  } catch (err) {
    next(err);
  }
};

export const createPayroll = async (req, res, next) => {
  try {
    const payroll = await Payroll.create(req.body);
    res.status(201).json(payroll);
  } catch (err) {
    next(err);
  }
};

export const getPayroll = async (req, res, next) => {
  try {
    const payrolls = await Payroll.find();
    res.json(payrolls);
  } catch (err) {
    next(err);
  }
};

export const getAuditLogs = async (req, res, next) => {
  try {
    const { page = 1, limit = 20, entity } = req.query;
    const filter = entity ? { entity } : {};

    const logs = await AuditLog.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await AuditLog.countDocuments(filter);

    res.json({
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      logs
    });
  } catch (err) {
    next(err);
  }
};
