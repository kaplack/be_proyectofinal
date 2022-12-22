import UserFactoryDAO from "../models/DAO/user/user.factory.js";
import config from "../config/config.js";
import logger from "../config/myLogger.js";

class UserAPI {
  constructor() {
    this.userDAO = UserFactoryDAO.get(config.TYPE_DB);
    logger.info(this.userDAO);
  }

  async getUser(id) {
    return await this.userDAO.getUser(id);
  }

  async updateUser(id, object) {
    return await this.userDAO.updateUser(id, object);
  }

  async insertUser(newToInsert) {
    return await this.userDAO.insertUser(newToInsert);
  }
}

export default UserAPI;
