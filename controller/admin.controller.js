import ProductAPI from "../api/products.api.js";
import UserAPI from "../api/user.api.js";
import validateUserServices from "../services/login.service.js";
import ProductService from "../services/products.service.js";
import logger from "../config/myLogger.js";

class AdminController {
  constructor() {
    this.productAPI = new ProductAPI();
    this.userAPI = new UserAPI();
    this.productService = new ProductService();
  }

  getAdminPage = async (req, res) => {
    try {
      //console.log(product__id);
      let user = req.session.currentUser;

      user = await validateUserServices(user);
      console.log("user_admin_controller: ", user);
      let products = await this.productService.getUserProduct(user[0]._id);

      res.render("admin", {
        user: user[0],
        listExists: true,
        products: products,
      });
    } catch (e) {
      logger.error("Error controller get product", e);
    }
  };

  updateUser = async (req, res) => {
    try {
      const file = req.file;

      let user = await this.userAPI.getUser(req.body.userID);
      user = user[0];
      console.log(user);
      let userUpdate = {};
      if (!file) {
        userUpdate = {
          username: req.body.username,
          phone: req.body.phone,
          email: req.body.email,
        };
      } else {
        userUpdate = {
          username: req.body.username,
          phone: req.body.phone,
          email: req.body.email,
          avatar: file.path,
        };
      }
      this.userAPI.updateUser(req.body.userID, userUpdate);
      res.redirect("/useradmin");
    } catch (e) {
      logger.error("Error controller insert product", e);
    }
  };

  delProd = async (req, res) => {
    let deleteProduct = req.params.deleteProductID;
    if (deleteProduct) {
      console.log(deleteProduct);
      this.productAPI.delProduct(deleteProduct);
      res.redirect("/useradmin");
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

export default AdminController;
