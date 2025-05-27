import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { emailRegex, phoneRegex } from '../utils/validators.js';

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: emailRegex
  },
  phone: {
    type: String,
    match: phoneRegex
  },
  position: {
    type: String,
    default: 'Employee',
    enum: ['Employee', 'Manager', 'HR']
  },
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  }
}, { timestamps: true });

employeeSchema.pre('validate', function (next) {
  if (this.position === 'Manager' && !this.departmentId) {
    this.invalidate('departmentId', 'Manager must be assigned to a department.');
  }
  next();
});

employeeSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export const Employee = mongoose.model('Employee', employeeSchema);
