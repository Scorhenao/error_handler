import { inject, injectable } from "tsyringe";
import { ProductRepository } from "../repositories/productRepository";


@injectable()
export class ProductService {
    constructor(@inject(ProductRepository) private productRepository: ProductRepository) {}

    async getAllProducts() {
        return this.productRepository.getAllProducts();
    }
}