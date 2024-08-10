import { container } from "tsyringe";
import { UserRepository } from "../repositories/user.repository";
import { UserService } from "../services/user.service";
import { ProductRepository } from "../repositories/productRepository";
import { ProductService } from "../services/productService";




container.registerSingleton<UserRepository>("UserRepository", UserRepository);
container.registerSingleton<UserService>("UserService", UserService);

container.registerSingleton<ProductRepository>("ProductRepository", ProductRepository);
container.registerSingleton<ProductService>("ProductService", ProductService);