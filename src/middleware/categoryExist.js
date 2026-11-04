import { StatusCodes } from "http-status-codes";
import Category from "../models/category.js";

async function categoryExist(req,res,next){

    const existingCategory = await Category.findOne({
        categoryName: req.body.categoryName
    });

    if(existingCategory){
        return res.status(StatusCodes.CONFLICT).json({
            status:false,
            message: "Category already exists"
        });
    }
    return next();
}

export default categoryExist;