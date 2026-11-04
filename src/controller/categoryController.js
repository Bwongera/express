
import Category from "../models/category.js";
import { StatusCodes } from "http-status-codes";

class Controller {
    static createCategory = async (req,res)=>{
        try{
            const category = await Category.create(req.body)
            
            return res.status(StatusCodes.CREATED).json({
              status: "success",
              message: "Category created successfully",
              data: category  
            });
        }catch(error){
            console.log(error)

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                status: "error",
                message: error.message
            });
        };
    }
}

export default Controller;