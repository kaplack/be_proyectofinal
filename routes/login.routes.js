import { Router } from "express";
import multer from "multer";
import LoginController from "../controller/login.controller.js";

const loginRouter = new Router();
const loginCtrl = new LoginController();
const upload = multer();

loginRouter.get("/", loginCtrl.getLoginController);
loginRouter.post("/", upload.none(), loginCtrl.loginController);

export default loginRouter;
