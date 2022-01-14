import { NextFunction, Request, Response, Router } from "express";
import { uploadImage } from "../config/multer";
import { ProductController } from "../controllers";

const productRouter: Router = Router();

productRouter.post("/",(req: Request, res: Response, next: NextFunction) =>
  ProductController.save(req, res, next)
);

productRouter.post("/upload", uploadImage.single("image"),(req: Request, res: Response, next: NextFunction) =>
  ProductController.uploadImage(req, res, next)
);


productRouter.put("/", (req: Request, res: Response, next: NextFunction) =>
  ProductController.update(req, res, next)
);

productRouter.get("/:id", (req: Request, res: Response, next: NextFunction) =>
  ProductController.findById(req, res, next)
);

productRouter.get("/", (req: Request, res: Response, next: NextFunction) =>
  ProductController.listAll(req, res, next)
);

productRouter.delete("/:id",(req: Request, res: Response, next: NextFunction) =>
  ProductController.remove(req, res, next)
);

export default productRouter;
