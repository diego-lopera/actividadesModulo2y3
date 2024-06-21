import express from 'express';
import dotenv from 'dotenv';
import { connectionDB } from './config/db.js';

const app = express();
dotenv.config();
const port  = process.env.PORT;

connectionDB();

// app.get('/',(req, res)=>{
//     res.send('Hola, esto es una petición');
// });

app.listen(port, () => {
    console.log(`Port: http://localhost:${port}`);
});
