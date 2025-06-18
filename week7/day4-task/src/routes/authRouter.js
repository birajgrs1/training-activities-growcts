import express from 'express';
import { registerUser, login } from '../controllers/authController.js';
import rateLimiter from '../middlewares/rateLimiter.js';

const authRouter = express.Router();

authRouter.post('/register', registerUser);

authRouter.post('/login', rateLimiter, login);

export default authRouter;
