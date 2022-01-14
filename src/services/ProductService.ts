import CreateProductDto from "../dto/CreateProductDto";
import UpdateProductDto from "../dto/UpdateProductDto";
import BaseCrudRepository from "../repository/BaseCrudRepository";
import { IProduct } from "../types";

export default class ProductService {
  constructor(
    private readonly productRepository: BaseCrudRepository<IProduct, string>
  ) {}

  listAll(): Promise<IProduct[]> {
    return this.productRepository.listAll();
  }
  findById(id: string): Promise<IProduct | null> {
    return this.productRepository.findById(id);
  }
  save(resource: CreateProductDto): Promise<IProduct> {
    return this.productRepository.save(resource);
  }

  remove(id: string): Promise<any> {
    return this.productRepository.remove(id);
  }

  update(resource: UpdateProductDto): Promise<IProduct | null> {
    return this.productRepository.update(resource);
  }
}
