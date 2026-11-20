import { StatusCodes } from "http-status-codes"
import jwt from "jsonwebtoken"


function VerifyAccessToken (passRole) {
 return async(req,res,next)=>{
   try{
    const token = req.headers.authorization
    if(!token){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            message: "Missing token"
        })
    }
    const decoded = await jwt.verify(token,process.env.SCRET_KEY)
    if(!decoded){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            message: "Invalid token"
        })
    }
    const User = await User.findById(decoded.id)
    if(!User){
        return res.status(StatusCodes.NOT_FOUND).json({
            success: false,
            message: "User not found"
        })
    }
    req.user = User
    req.token = token

    const role = req.user.role
    if(!passRole.includes(role)){
        return res.status(StatusCodes.FORBIDDEN).json({
            success: false,
            message: "You are not authorized to access this resource."
        });
    }
    return next()
   } catch(error){
    console.log(error)
    return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Invalid or expired token"
    })
   }
 }
}

export default VerifyAccessToken