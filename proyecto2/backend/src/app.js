import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(cors());

const port = process.env.PORT || process.env.PORT2;
app.listen(port, ()=>{
    console.log(`Se esta ejecutando en: http://localhost:${port}`)
}); 