import mongoose from 'mongoose';

const payrollSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  month: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  baseSalary: {
    type: Number,
    required: true
  },
  bonus: {
    type: Number,
    default: 0
  },
  deductions: {
    type: Number,
    default: 0
  },
  totalPay: {
    type: Number,
    required: true
  },
  paidOn: {
    type: Date,
    default: Date.now
  }
});

const Payroll = mongoose.model('Payroll', payrollSchema);
export default Payroll;
