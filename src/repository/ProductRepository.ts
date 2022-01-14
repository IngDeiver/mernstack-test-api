import { Product } from "../model";
import { IProduct } from "../types";
import BaseCrudRepository from "./BaseCrudRepository";

export default class ProductRepository
  implements BaseCrudRepository<IProduct, string>
{
  async listAll(): Promise<IProduct[]> {
    return Product.find({});
  }
  async findById(id: string): Promise<IProduct | null> {
    return Product.findById(id);
  }
  async save(resource: IProduct): Promise<IProduct> {
    return new Product(resource).save();
  }

  async remove(id: string): Promise<any> {
    return Product.remove({ _id: id });
  }

  async update(resource: IProduct): Promise<IProduct | null> {
    const { _id } = resource;
    return Product.findByIdAndUpdate(_id, resource, { new: true });
  }
}
