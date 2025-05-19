import express from 'express';
import clientRoutes from './src/routes/clientRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', clientRoutes);

app.get('/', (req, res) => {
  res.send('Client API');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
