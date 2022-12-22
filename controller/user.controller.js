import UserAPI from "../api/user.api.js";
import logger from "../config/myLogger.js";

class UserController {
  constructor() {
    this.userAPI = new UserAPI();
  }

  getUser = async (req, res) => {
    try {
      const users = await this.userAPI.getUser();
      res.json(users);
    } catch (e) {
      logger.error("Error to get users", e);
    }
  };
}

export default UserController;
