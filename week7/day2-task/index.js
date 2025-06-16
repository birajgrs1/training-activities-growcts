import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/dbConnector.js";


dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});

