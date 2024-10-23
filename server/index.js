// server/index.js

import 'dotenv/config';
import express from 'express'; 
import cors from 'cors'; 
import cookieParser from 'cookie-parser'; 
import router from './routes/router.js';
import './connection.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.status(200).send('Server started successfully');
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
