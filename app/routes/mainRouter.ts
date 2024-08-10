import { Router } from "express";
import authRouter from "./authRouter";
import productRouter from "./productRouter";
import { verifyJWT } from "../middlewares/verifyJWT";

const mainRouter: Router = Router();

mainRouter.use("/auth", authRouter)
mainRouter.use("/products", verifyJWT, productRouter)


export default mainRouter;