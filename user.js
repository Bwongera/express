import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:false,
        default:"Ngabonziza John"
    },
    email:{
      type:String,
      required:true,
      unique:true  
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    password:{
      type:String,
      required:true
    },
    role:{
      type:String,
      enum:["admin","user"],
      default:"user"
    },
    createdAt:{
        type:Date,
        default: new Date(Date.now())
    }
})

const User = mongoose.model("User",userSchema)

export default User