
import Category from "../models/category.js";
import { StatusCodes } from "http-status-codes";

class Controller {
    static createCategory = async (req, res) => {
        try {
            const category = await Category.create(req.body)

            return res.status(StatusCodes.CREATED).json({
                status: "success",
                message: "Category created successfully",
                data: category
            });
        } catch (error) {
            console.log(error)

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                status: "error",
                message: error.message
            });
        };
    }

    //get all users

    static getAllCategories = async (req, res) => {

        try {
            const categories = await Category.find();
            if (!categories.length) {
                return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "no categories found" })
            }
            return res.status(StatusCodes.OK).json({ success: true, message: "categories found successuflly", data: categories })
        }
        catch (error) {
            console.log(error)
            return res.status(500).json({ success: false, message: "Failed to get categories", error: error.message })
        }

    }


 //get one user by id

    static getOneCategory = async (req, res) => {
        try {
            const category = await Category.findById(req.params.id);
            if (!category) {
                return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "category not found" })
            }
            return res.status(StatusCodes.OK).json({ success: true, message: "category found successfully", data: category })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ success: false, message: "Failed to get category", error: error.message })
        }
    }







//update user by id

    static updateCategory = async (req, res) => {
        try {
            const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!category) {
                return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "category not found" })
            }
            return res.status(StatusCodes.OK).json({ success: true, message: "category updated successfully", data: category })
        } catch (error) {
            console.log(error)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: "Failed to update category", error: error.message })
        }
    }























    //delete category by id

    static deleteCategory = async (req, res) => {
        try {
            const category = await Category.findByIdAndDelete(req.params.id);
            if (!category) {
                return res.status(StatusCodes.NOT_FOUND).json({ success: false, message: "Category not found" })
            }
            return res.status(StatusCodes.OK).json({ success: true, message: "Category deleted successfully", data: category })

        } catch (error) {
            console.log(error)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: "Failed to delete category", error: error.message })
        }
    }
}

export default Controller;


