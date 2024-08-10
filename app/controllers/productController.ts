import { ProductService } from "../services/productService";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { handleError } from "../helpers/handleErrors.utility";



export default class ProductController {

    static async getAllProducts(req: Request, res: Response) {
        try {
            const user = req.body.user;
            const productService = container.resolve(ProductService);
            const products = await productService.getAllProducts();
            res.status(200).json({
                status: 200,
                data: products,
                user
            });
        } catch (error) {
            handleError(res, req, error as Error)
        }
    }

}