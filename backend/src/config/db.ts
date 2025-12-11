// src/config/database.ts

import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  const uri = process.env.MONGODB_URI;

  // si la variable de entorno está definida
  if (!uri) {
    console.error('No se ha definido la variable de entorno MONGODB_URI');
    process.exit(1);
  }

  try {
    // Conexión a MongoDB
    await mongoose.connect(uri);
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    const err = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Error de conexión a MongoDB:', err);
    process.exit(1);
  }
};
