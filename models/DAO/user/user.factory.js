import ProductFileDAO from "./file.dao.js";
import ProductMemoryDAO from "./memory.dao.js";
import UserMongoDAO from "./mongo.dao.js";

class UserFactoryDAO {
  static get(type) {
    switch (type.toLowerCase()) {
      case "memory":
        return new UserMemoryDAO();
      case "file":
        return new UserFileDAO(process.cwd() + "/user_db.json");
      case "mongo":
        return new UserMongoDAO("coloso", "col_users");
      default:
        return new UserMemoryDAO();
    }
  }
}

export default UserFactoryDAO;
