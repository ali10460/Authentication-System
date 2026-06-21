import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import course from 'course';

import routes from './routes/auth.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/users', routes);
app.use(course);
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
