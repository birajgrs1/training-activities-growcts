import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/dbConnector.js";
import cors from "cors";

import authRouter from "./src/routes/authRouter.js";
import employeeRouter from "./src/routes/employeeRouter.js";
import departmentRouter from "./src/routes/departmentRouter.js";
import payrollRouter from "./src/routes/payrollRouter.js";

dotenv.config();

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());


app.use("/api/auth", authRouter);
app.use("/api/employees", employeeRouter);
app.use("/api/departments", departmentRouter);
app.use("/api/payroll", payrollRouter);

// app.get("/", (req, res) => {
//   res.send("Client API is running ");
// });

const port = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(port, () => {
    console.log(` Server is running on http://localhost:${port}`);
  });
});
