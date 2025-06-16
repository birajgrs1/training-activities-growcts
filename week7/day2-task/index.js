import express from "express";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import connectDB from "./src/config/dbConnector.js";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./src/middlewares/errorHandler.js";
import { rateLimiter } from "./src/middlewares/rateLimiter.js";
import router from "./src/routes/authRoutes.js";

// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

dotenv.config();
dotenvExpand.expand(dotenv.config());
const app = express();

app.use(cors());
app.use(helmet());
app.use(rateLimiter);
app.use(errorHandler);

app.use(express.json());

// app.get("/", (req, res) => {
//     bcrypt.genSalt(10, (err, salt) => {   //generates salt before hashing
//         bcrypt.hash("password", salt, (err, hash) => {
//             console.log(hash);
//         });
//     })
// })

// app.get("/", (req, res) => {
//     jwt.sign({ name: 'Ram Dahal'}, process.env.SECRET_KEY, (err, token) => {
//         console.log(token);
//         res.send('Token Generated');
//     });
// })

app.use("/api/auth", router); // auth routes

const port = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
