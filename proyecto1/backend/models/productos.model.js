import mongoose from 'mongoose';

const schema = mongoose.Schema;

const productSchema = new schema({
    nombre: {
        type: String,
        require: true
    },
    marca: {
        type: String
    },
    modelo: {
        type: String
    },
    precio: {
        type: Number,
        require: true
    },
    imagen: {
        type: String
    }
}); 

export const productModel = mongoose.model('product', productSchema);

