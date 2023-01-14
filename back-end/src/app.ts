import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { router as registerRouter } from "./routes/register.js";
import * as dotenv from "dotenv";
import {router as loginRouter} from "./routes/login.js";


dotenv.config({path:'../.env'});
const app = express();
const PORT = process.env.PORT ||3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(registerRouter);
app.use(loginRouter);
app.use("/", ,(req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`The server is running at ${PORT}`);
});
