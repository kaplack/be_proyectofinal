import validateUsersServices from "../services/login.service.js";
import UserServices from "../services/user.service.js";
import bcryptjs from "bcryptjs";
import UserAPI from "../api/user.api.js";
import logger from "../config/myLogger.js";

class LoginController {
  constructor() {
    this.userAPI = new UserAPI();
  }

  getLoginController = async (req, res) => {
    let user = req.session.currentUser;
    let currUser = validateUsersServices(user);
    res.render("login", {
      user: currUser[0],
    });
  };

  loginController = async (req, res) => {
    const usersData = await this.userAPI.getUser();
    let user = {
      user: req.body.user,
      password: String(req.body.password),
    };
    //console.log(user);
    const userExist = usersData.some((u) => {
      return u.username == user.user;
    });
    //console.log(userExist);
    if (userExist) {
      let currUser = usersData.filter((u) => u.username == user.user);
      console.log("currUser: ", currUser);
      let compare = bcryptjs.compareSync(user.password, currUser[0].password);
      //console.log(compare);
      if (compare) {
        req.session.currentUser = user.user;
        req.session.currentUserID = currUser[0]._id;
        res.redirect("/");
      } else {
        res.send("la clave no es correcta");
      }
    } else {
      res.send("Usuario no Existe");
    }
  };
}

export default LoginController;
