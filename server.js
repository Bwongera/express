import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import router from "./authRouter.js"

dotenv.config()

const app = express()

const db = process.env.DATABASE_URL
const port = process.env.PORT
app.use(express.json({limit:"500mb"}))
app.use(express.urlencoded({limit:"500mb",extended:true}))
app.use("/api/v1",router)

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})

mongoose.connect(db).then(()=>{
    console.log("Database successfuly connected")
}).catch((error)=>{
    console.log(`Fail to connect to database because: ${error}`)
})