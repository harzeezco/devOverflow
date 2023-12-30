import mongoose from 'mongoose';

let isConnected: boolean = false;

export async function connectToDatabase() {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URL) {
    return console.log('Missing Mongoose env variable');
  }

  if (isConnected) {
    return console.log('Mongoose is connected');
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL!, { dbName: 'devflow' });

    isConnected = true;

    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB');
  }

  return null;
}

// gMpdip5NhLE83gJm
