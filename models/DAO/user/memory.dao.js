import UserBaseDAO from "./base.dao.js";
import createProductDTO from "../../DTO/product.dto.js";
import logger from "../../../config/myLogger.js";

class UserMemoryDAO extends UserBaseDAO {
  constructor() {
    super();
    this.users = [];
  }

  getProducts = async (_id) => {
    try {
      if (_id) {
        let index = this.getIndex(_id, this.products);

        return index >= 0 ? [this.products[index]] : [];
      }
      logger.info(this.products);
      return this.products;
    } catch (e) {
      logger.error("Error to get products", e);

      return [];
    }
  };
  insertProduct = async (newToInsert) => {
    try {
      const _id = this.getNextID(this.noticias);
      const datetime = new Date().toLocaleString();
      const newDTO = createProductDTO(newToInsert, _id, datetime);

      this.products.push(newDTO);

      return newDTO;
    } catch (e) {
      logger.error("Error to insert products", e);

      return [];
    }
  };
}

export default UserMemoryDAO;
