import mongoose from 'mongoose';

const payrollSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export const Payroll = mongoose.model('Payroll', payrollSchema);



