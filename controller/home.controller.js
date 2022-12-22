import UserService from "../services/user.service.js";
import ProductAPI from "../api/products.api.js";
import UserAPI from "../api/user.api.js";
import logger from "../config/myLogger.js";

const userService = new UserService();

const getHomeController = async (req, res) => {
  const productAPI = new ProductAPI();
  const userAPI = new UserAPI();
  const products = await productAPI.getProducts();
  let userData = await userAPI.getUser();
  //logger.info("userData", userData);
  let currUser = req.session.currentUser;
  //Identifica usuario --> consultar si la funcion no debe estar dentro del controlador
  const user = userData.filter((us) => {
    return us.username == currUser;
  });

  const userObj = user[0];
  //logger.info("current user", user[0]);
  //logger.info("current user", currUser);
  res.render("home", { user: userObj, products });
};

export default getHomeController;
