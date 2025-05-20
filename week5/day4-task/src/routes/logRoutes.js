import { Router } from 'express';
import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Corrected: This is now just /errors (because /logs is prefixed in index.js)
router.get('/errors', (req, res) => {
  const filePath = join(__dirname, '../logs/error.log');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) return res.status(500).send('Failed to read error log');
    const lines = data.trim().split('\n');
    const last20 = lines.slice(-20).join('\n');
    res.type('text/plain').send(last20);
  });
});

export default router;
