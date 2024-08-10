import { handleLayersError } from "../helpers/handleLayersErrors.utility";
import { ProductModel } from "../models/productModel";
import { injectable } from 'tsyringe';

@injectable()
export  class ProductRepository {
    async getAllProducts(): Promise<ProductModel[] | void> {	
        try {
            const products = await ProductModel.findAll();
            return products;
        } catch (error) {
            handleLayersError('Repository', error);
        }
    }

}
