import bcrypt from "bcrypt"

const hashPassword =(password)=>{
    return bcrypt.hash(password,10)
}

const comparePassword=(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword)
}
 
export  {hashPassword, comparePassword}