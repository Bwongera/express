import express from "express"
import authRouter from "./authRouter.js"
import CategoryRouter from "./categoryRouter.js"


const router = express.Router()

 router.use("/auth", authRouter)
 router.use("/category", CategoryRouter)

export default router