import express from 'express';
import session from 'express-session';
import authRoutes from './src/routes/authRoutes/authRoutes.js';
import sessionRoutes from './src/routes/sessionRoutes/sessionRoutes.js';
import clientRoutes from './src/routes/clientRoutes/clientRoutes.js';
import logRoutes from './src/routes/logRoutes/logRoutes.js';
import inputSanitizer from './src/middleware/inputSanitizer.js';
import rateLimiter from './src/middleware/rateLimiter.js';
import fs from 'fs-extra';

const app = express();
const PORT = process.env.PORT || 3000;

async function init() {
  await fs.ensureFile('./src/data/clients.json');
  await fs.ensureFile('./src/data/devices.json');
  await fs.ensureFile('./src/data/sessions.json');
  await fs.ensureFile('./src/data/logs.json');

  app.use(express.json());
  app.use(inputSanitizer);
  app.use(rateLimiter);

  app.use(session({
    secret: process.env.SESSION_SECRET || 'demoSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }
  }));

  app.use('/api/auth', authRoutes);
  app.use('/api/sessions', sessionRoutes);
  app.use('/api/clients', clientRoutes);
  app.use('/api/logs', logRoutes);

  app.get('/', (req, res) => {
    res.send('Microservices App');
  });

  app.listen(PORT, () => {
    console.log(` Server listening at http://localhost:${PORT}`);
  });
}

init().catch(err => {
  console.error(' Failed to start server:', err);
});