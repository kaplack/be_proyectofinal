import ProductAPI from "../api/products.api.js";
import UserAPI from "../api/user.api.js";
import validateUserServices from "../services/login.service.js";
import logger from "../config/myLogger.js";

class ProductController {
  constructor() {
    this.productAPI = new ProductAPI();
    this.userAPI = new UserAPI();
  }

  getProducts = async (req, res) => {
    try {
      const id = req.params.id;
      const products = await this.productAPI.getProducts(id);
      logger.info(products);
      let user = req.session.currentUser;

      user = await validateUserServices(user);
      console.log(user);
      res.render("productos", {
        user: user[0],
        listExists: true,
        products: products,
      });
    } catch (e) {
      logger.error("Error controller get product", e);
    }
  };

  insertProduct = async (req, res) => {
    try {
      const file = req.file;
      if (!file) {
        const error = new Error("Please upload file");
        error.httpStatusCode = 400;
        return next(400);
      }
      let productToSave = {
        name: req.body.title,
        userID: req.session.currentUserID,
        price: req.body.price,
        description: req.body.description,
        stock: req.body.stock,
        thumbnail: file.path,
      };
      const productSaved = await this.productAPI.insertProduct(productToSave);
      logger.info("Producto guardado con exito: ", productSaved);
      res.redirect("/");
    } catch (e) {
      logger.error("Error controller insert product", e);
    }
  };
}

export default ProductController;
