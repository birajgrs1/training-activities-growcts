import mongoose from "mongoose";
import { createEmployeeWithPayroll } from "../services/transactionService.js";
import { Employee } from "../models/Employee.js";
import { Department } from "../models/Department.js";
import { Payroll } from "../models/Payroll.js";

export const createEmployee = async (req, res, next) => {
  try {
    const employee = await createEmployeeWithPayroll(
      req.body.employee,
      req.body.payroll
    );
    res.status(201).json(employee);
  } catch (err) {
    next(err);
  }
};

export const getEmployees = async (req, res, next) => {
  try {
    const {
      name,
      sort = "createdAt",
      order = "asc",
      page = 1,
      limit = 10,
    } = req.query;
    const query = {};

    if (name) {
      query.name = new RegExp(name, "i");
    }

    const employees = await Employee.find(query)
      .sort({ [sort]: order === "asc" ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .populate("departmentId")
      .populate("payrolls");

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
    const payrolls = await Payroll.find()
      .populate("employee")
      .populate("department");
    res.json(payrolls);
  } catch (err) {
    next(err);
  }
};

export const employeeStatistics = async (req, res, next) => {
  try {
    const total = await Employee.countDocuments();
    const byPosition = await Employee.aggregate([
      { $group: { _id: "$position", count: { $sum: 1 } } },
    ]);
    const avgSalary = await Employee.aggregate([
      { $group: { _id: null, avgSalary: { $avg: "$salary" } } },
    ]);

    res.json({ total, byPosition, avgSalary: avgSalary[0]?.avgSalary || 0 });
  } catch (err) {
    next(err);
  }
};

export const employeeSalaryRange = async (req, res, next) => {
  try {
    const result = await Payroll.aggregate([
      {
        $lookup: {
          from: "departments",
          localField: "department",
          foreignField: "_id",
          as: "departmentInfo",
        },
      },
      { $unwind: "$departmentInfo" },
      {
        $group: {
          _id: "$departmentInfo.name",
          minSalary: { $min: "$salary" },
          maxSalary: { $max: "$salary" },
          avgSalary: { $avg: "$salary" },
        },
      },
    ]);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const departmentEmployeeStats = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Employee.aggregate([
      { $match: { departmentId: new mongoose.Types.ObjectId(id) } },
      {
        $group: {
          _id: "$departmentId",
          totalEmployees: { $sum: 1 },
          avgSalary: { $avg: "$salary" },
        },
      },
    ]);
    res.json(result[0] || {});
  } catch (err) {
    next(err);
  }
};

export const estimatedVsCount = async (req, res, next) => {
  try {
    const estimated = await Employee.estimatedDocumentCount();
    const actual = await Employee.countDocuments();
    res.json({ estimated, actual });
  } catch (err) {
    next(err);
  }
};

export const paginatedByNetPay = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const result = await Payroll.aggregate([
      {
        $lookup: {
          from: "employees",
          localField: "employee",
          foreignField: "_id",
          as: "employeeInfo",
        },
      },
      { $unwind: "$employeeInfo" },
      { $sort: { netPay: -1 } },
      { $skip: skip },
      { $limit: parseInt(limit) },
    ]);

    res.json(result);
  } catch (err) {
    next(err);
  }
};
