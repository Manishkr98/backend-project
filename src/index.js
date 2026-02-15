import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();
const port = process.env.PORT||8000

app.get("/",(req, res)=>{
 res.send('Application is under Development!')
})

app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})