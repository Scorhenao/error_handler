import { Router } from "express";
import ProductController from "../controllers/productController";

const productRouter: Router = Router();

productRouter.get("/", ProductController.getAllProducts);


export default productRouter;