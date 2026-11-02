import bcrypt from "bcrypt"

function hashPassword (password){
    return bcrypt.hash(password,10)
}
 
export default hashPassword