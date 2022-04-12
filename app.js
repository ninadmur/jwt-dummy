import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoutes from './routes/authRoutes.js';

const app = express();

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Server running on ${process.env.PORT}`)
    )
  )
  .catch(e => console.log(e));

app.use('/auth', AuthRoutes);
