import ProductFactoryDAO from "../models/DAO/product/product.factory.js";
import config from "../config/config.js";
import logger from "../config/myLogger.js";

class ProductAPI {
  constructor() {
    this.productDAO = ProductFactoryDAO.get(config.TYPE_DB);
    logger.info(this.productDAO);
  }

  async getProducts(id) {
    return await this.productDAO.getProducts(id);
  }

  async insertProduct(newToInsert) {
    return await this.productDAO.insertProduct(newToInsert);
  }
  async delProduct(id) {
    return await this.productDAO.delProduct(id);
  }
}

export default ProductAPI;
