import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js';

import path from 'path';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://mbharath1603:YC9Np8R6WwPO3omi@pfa.qn8k9jz.mongodb.net/?retryWrites=true&w=majority&appName=PFA").then(() => {
    console.log("Connected to MongoDB!");
}).catch((err) => {
    console.log(err);
})
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000')
}
);
app.use('/api/auth', authRouter);



app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Servor error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});


