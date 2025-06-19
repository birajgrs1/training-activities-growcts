const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const employeeRoutes = require('./src/routes/employeeRoutes');
const departmentRoutes = require('./src/routes/departmentRoutes');
const payrollRoutes = require('./src/routes/payrollRoutes')

app.use(express.json());
app.use(cookieParser());
require('dotenv').config();
require('./src/config/db')();


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/payroll', payrollRoutes);


//handling servr running 
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});