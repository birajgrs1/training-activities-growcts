import express from 'express';
import empRoutes from './src/routes/empRoutes.js';
import errorHandler from './src/middleware/errorHandler.js';
import connectDB from './src/config/dbConnectors.js';

const app = express();

app.use(express.json());

app.use('/api', empRoutes);
app.use(errorHandler);



const PORT = 3000;
const HOST = 'localhost';

connectDB().then(() => {
    app.listen(PORT, HOST, () => {
        console.log(`Server is running on http://${HOST}:${PORT}`);
    });
});