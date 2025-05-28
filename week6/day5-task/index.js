import express from "express";
import connectDB from "./src/config/dbConnector.js";
import dotenv from "dotenv";
import router from "./src/routes/appRoute.js";
import middleware from "./src/middlewares/middleware.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(middleware);

app.use("/api", router);

const PORT = 3000;
const HOST = 'localhost';


connectDB().then(() => {
    app.listen(PORT, HOST, () => {
        console.log(`Server is running on http://${HOST}:${PORT}`);
    });
});