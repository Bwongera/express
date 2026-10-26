import express from "express"
import User from "./user.js"
const router = express.Router()

router.post("/signup", async(req,res)=>{
  console.log(req.body)
    try {
      const user = await User.create(req.body) 
      if(!user){
        return res.status(400).json({status:"error",message:"Fail to create account"})
      }else{
        return res.status(201).json({status:"OK",message:"User successfuly created",user})
      }
    } catch (error) {
        return res.status(500).json({status:"error",message: `Error is ${error}`})
    }
})

export default router











