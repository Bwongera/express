import express from "express"
import Controller from "../controller/categoryController.js"
import categoryExist from "../middleware/categoryExist.js"

const categoryRouter = express.Router()

categoryRouter.post("/create",categoryExist,Controller.createCategory);
categoryRouter.delete("/delete/:id", Controller.deleteCategory);
categoryRouter.get("/categories", Controller.getAllCategories);
categoryRouter.get("/category/:id", Controller.getOneCategory);
categoryRouter.patch("/update/:id", Controller.updateCategory)


export default categoryRouter