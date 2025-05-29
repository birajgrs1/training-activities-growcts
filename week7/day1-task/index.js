import express from "express";
import connectDB from "./src/config/dbConnector.js";
import dotenv from "dotenv";
import router from "./src/routes/routes.js";
import middleware from "./src/middlewares/middleware.js";
import { scheduleCronJobs } from './src/cron/cronJobs.js';
import cronRouter from "./src/routes/cronRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(middleware);

scheduleCronJobs();



app.use("/api", router);
app.use("/api/cron", cronRouter);

const PORT = 3000;
const HOST = 'localhost';

connectDB().then(() => {
    app.listen(PORT, HOST, () => {
        console.log(`Server is running on http://${HOST}:${PORT}`);
    });
});