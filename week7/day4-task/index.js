import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/dbConnector.js";
import cors from "cors";
import authRouter from "./src/routes/authRouter.js";

const app = express();
dotenv.config();


app.use(cors({origin: true, credentials: true }));
app.use(express.json());

app.use("/api/auth", authRouter);


app.get('/', (req, res) => {
  res.send('Client API');
})

const port = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
