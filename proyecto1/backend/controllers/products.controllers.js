import productModel from '../models/productos.model.js';

export const getProducts = async(req, res) => {
    return res.send('GET OK');
};

export const postProducts = async(req, res) => {
    return res.send('POST OK');
};

export const deleteProductById = async(req, res) => {
    return res.send('DELETE OK');
};

export const putProductById = async(req, res) => {
    return res.send('PUT OK');
};
