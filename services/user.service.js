import UserModel from "../models/models/user.models.js";
import myConnect from "../config/dbConnect.js";

class UserService {
  constructor() {}

  getUsers() {
    myConnect();
    return UserModel.find().then((result) => {
      return result;
    });
  }

  saveUser(user) {
    myConnect();
    const userInfo = new UserModel(user);
    userInfo.save().then((result) => {
      return result;
    });
  }
}

export default UserService;
