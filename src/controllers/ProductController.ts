import { NextFunction, Request, Response } from "express";
import CreateProductDto from "../dto/CreateProductDto";
import UpdateProductoDto from "../dto/UpdateProductDto";
import { ProductRepository } from "../repository";
import ProductService from "../services/ProductService";
import { validateOrReject } from "class-validator";
import HttpError from "../utils/httpError";
import { format } from "../utils";
import { plainToClass } from "class-transformer";
import { isValidObjectId } from "mongoose";

export default abstract class ProductController {
  private static productService: ProductService = new ProductService(
    new ProductRepository()
  );

  static async listAll(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await this.productService.listAll();
      res.json(products);
    } catch (error) {
      next(error);
    }
  }

  static async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params["id"];

      if (id && isValidObjectId(id)) {
        const product = await this.productService.findById(id);
        res.json(product);
      } else {
        next(new HttpError(400, "Product objectId is required"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async save(req: Request, res: Response, next: NextFunction) {
    try {
      const data: CreateProductDto = req.body;

      validateOrReject(plainToClass(CreateProductDto, data))
        .then(async () => {
          const product = await this.productService.save(data);
          res.json(product);
        })
        .catch((errors) => {
          console.log(Object.keys(errors));

          next(new HttpError(400, format(errors)));
        });
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const data: UpdateProductoDto = req.body;
      console.log(data);

      validateOrReject(plainToClass(UpdateProductoDto, data))
        .then(async () => {
          const product = await this.productService.update(data);
          res.json(product);
        })
        .catch((errors) => {
          next(new HttpError(400, format(errors)));
        });
    } catch (error) {
      next(error);
    }
  }

  static async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params["id"];

      if (id  && isValidObjectId(id)) {
        await this.productService.remove(id);
        res.sendStatus(200);
      } else {
        next(new HttpError(400, "Product objectId is required"));
      }
    } catch (error) {
      next(error);
    }
  }
}
