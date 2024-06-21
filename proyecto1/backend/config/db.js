import mongoose from "mongoose";

export const connectionDB = async () => {
    await mongoose.connect(process.env.CONNECTION_STRING,{})
    try {
        console.log('Conectado a BD');
    }
    catch(error) {
        console.error('Error de conexión: ', error.message);
    }
}