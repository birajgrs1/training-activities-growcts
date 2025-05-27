import mongoose from 'mongoose';
import { Employee } from '../models/Employee.js';
import { Payroll } from '../models/Payroll.js';

export const createEmployeeWithPayroll = async (employeeData, payrollData) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const employee = await Employee.create([employeeData], { session });
    payrollData.employee = employee[0]._id;

    if (payrollData.salary < 5000) {
      throw new Error('Salary too low to process payroll');
    }

    await Payroll.create([payrollData], { session });

    await session.commitTransaction();
    session.endSession();

    return employee[0];
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    throw err;
  }
};
