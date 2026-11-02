import dotenv from "dotenv";
dotenv.config();

import express from "express";
import authRouter from "./src/routes/authRouter.js"
import { connectDb } from "./src/database/db.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

connectDb()

app.use("/api/v1",authRouter)










































































