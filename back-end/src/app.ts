import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {router as userRouter} from './routes/register.js'


const app =express();
const PORT =3033;

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors());

app.use(userRouter);
app.use('/',(req,res)=>{
    res.send("Hello World")

});

app.listen(PORT,()=>{
    console.log(`Ther server is running at ${PORT}`)
})