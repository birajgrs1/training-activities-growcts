import {rateLimit} from "express-rate-limit";

export const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 10 minutes
    max: 100, 
    standardHeaders: true, 
    legacyHeaders: false, 
});
