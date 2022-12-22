import { Router } from "express";
import multer from "multer";
import SignUpController from "../controller/signup.controller.js";

const signUpRouter = new Router();
const singUpController = new SignUpController();

signUpRouter.get("/", singUpController.signUpPageRenderService);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/users");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

signUpRouter.post(
  "/",
  upload.single("avatarFile"),
  singUpController.signUpUserService
);

export default signUpRouter;
