import express from "express";
import multer from "multer";
import ProductController from "../controller/products.controller.js";

const router = express.Router();

class ProductRouter {
  constructor() {
    this.productController = new ProductController();
  }

  start() {
    router.get("/:id?", this.productController.getProducts);

    //Multer config
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "public/uploads/products");
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    });
    const upload = multer({ storage });

    router.post(
      "/",
      upload.single("myFile"),
      this.productController.insertProduct
    );

    return router;
  }
}

export default ProductRouter;
