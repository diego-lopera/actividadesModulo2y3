import express from 'express';
import dotenv from 'dotenv';
import { connectionDB } from './config/db.js';
import productsRouter from './routes/products.routes.js';

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

dotenv.config();
const port  = process.env.PORT;

connectionDB();

app.use(express.json());

app.use('/', productsRouter);

// app.get('/',(req, res)=>{
//     res.send('Hola, esto es una petición');
// });

app.listen(port, () => {
    console.log(`Port: http://localhost:${port}`);
});
