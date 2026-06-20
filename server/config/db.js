import mongoose from 'mongoose';

export const connectDB = async () => {
  mongoose
    .connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not connect to mongoDb', err));
};
