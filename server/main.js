import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import userRouter from './routers/userRouter.js';
import serverRouter from './routers/serverRouter.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/server', serverRouter);
app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`)
})