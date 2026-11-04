import express from "express"
import Controller from "../controller/categoryController.js"
import categoryExist from "../middleware/categoryExist.js"

const categoryRouter = express.Router()

categoryRouter.post("/create",categoryExist,Controller.createCategory)

export default categoryRouter