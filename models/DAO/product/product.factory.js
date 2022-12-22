import ProductFileDAO from "./file.dao.js";
import ProductMemoryDAO from "./memory.dao.js";
import ProductMongoDAO from "./mongo.dao.js";

class ProductFactoryDAO {
  static get(type) {
    switch (type.toLowerCase()) {
      case "memory":
        return new ProductMemoryDAO();
      case "file":
        return new ProductFileDAO(process.cwd() + "/product_db.json");
      case "mongo":
        return new ProductMongoDAO("coloso", "col_products");
      default:
        return new ProductMemoryDAO();
    }
  }
}

export default ProductFactoryDAO;
