import mongoose, { mongo } from "mongoose";

const mongoDB = () => {
  try {

    mongoose.connect(process.env.MONGO_URI)
    console.log('Base de datos conectado');

  } catch (error) {
    console.log(error);
    throw new Error('No se pudo conectar a la base de datos')
  }
}

export default mongoDB