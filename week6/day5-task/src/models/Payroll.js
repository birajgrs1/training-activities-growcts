import mongoose from "mongoose";

const payrollSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    deductions: {
      type: Number,
      default: 0,
    },
    netPay: {
      type: Number,
    },
  },
  { timestamps: true }
);

payrollSchema.pre("save", function (next) {
  this.netPay = this.salary - this.deductions;
  next();
});

export const Payroll = mongoose.model("Payroll", payrollSchema);
