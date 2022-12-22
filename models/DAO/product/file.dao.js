import fs from "fs";
import ProductBaseDAO from "./base.dao.js";
import createProductDTO from "../../DTO/product.dto.js";
import logger from "../../../config/myLogger.js";

class ProductFileDAO extends ProductBaseDAO {
  constructor(filename) {
    super();
    this.filename = filename;
  }

  async read() {
    return JSON.parse(await fs.promises.readFile(this.filename, "utf-8"));
  }
  async write(products) {
    return await fs.promises.writeFile(
      this.filename,
      JSON.stringify(products, null, "\t")
    );
  }

  getProducts = async (_id) => {
    try {
      if (_id) {
        const products = await this.read();
        let index = this.getIndex(_id, products);

        return index >= 0 ? [products[index]] : [];
      }

      return await this.read();
    } catch (e) {
      logger.error("Error to get products", e);

      return [];
    }
  };
  insertProduct = async (productToInsert) => {
    try {
      const products = await this.read();

      const _id = this.getNextID(products);
      const datetime = new Date().toLocaleString();
      const newDTO = createProductDTO(productToInsert, _id, datetime);

      products.push(newDTO);

      await this.write(products);
    } catch (e) {
      logger.error("Error to insert noticia", e);

      return [];
    }
  };
}

export default ProductFileDAO;
