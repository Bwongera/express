const PORT = 3000

import express from "express"

const app = express()
app.get("/user",(req,res)=>{return res.status(200).json({message:"Hello guys"})})
 
app.listen(PORT,()=>{console.log(`server running on ${PORT}`)})
