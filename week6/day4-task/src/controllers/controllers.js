import { Employee } from '../models/Employee.js';
import { Department } from '../models/Department.js';
import {Payroll} from "../models/Payroll.js";

export const createEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (err) {
    next(err);
  }
};

export const getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find().populate('departmentId');
    res.json(employees);
  } catch (err) {
    next(err);
  }
};

export const createDepartment = async (req, res, next) => {
  try {
    const dept = await Department.create(req.body);
    res.status(201).json(dept);
  } catch (err) {
    next(err);
  }
};

export const createPayroll = async(req,res,next) =>{
  try {
    const payroll = await Payroll.create(req.body);
    res.status(201).json(payroll);
  } catch (err) {
    next(err);
  }
}

export const getPayroll = async (req, res, next) => {
  try {
    const payrolls = await Payroll.find().populate('employeeId').populate('departmentId');
    res.json(payrolls);
  } catch (err) {
    next(err);
  }
};
