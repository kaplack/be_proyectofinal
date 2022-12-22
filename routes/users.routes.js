import { Router } from "express";
import UserController from "../controller/user.controller.js";

const router = new Router();

class UserRouter {
  constructor() {
    this.userController = new UserController();
  }

  start() {
    router.get("/:id?", this.userController.getUser);

    return router;
  }
}

export default UserRouter;
