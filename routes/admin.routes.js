import { Router } from "express";
import AdminController from "../controller/admin.controller.js";
import multer from "multer";

const router = new Router();

class AdminRouter {
  constructor() {
    this.adminController = new AdminController();
  }

  start() {
    router.get("/", this.adminController.getAdminPage);
    router.get("/dprod/:deleteProductID", this.adminController.delProd);
    //Multer config
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "public/uploads/users");
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    });
    const upload = multer({ storage });
    router.post(
      "/",
      upload.single("user-image"),
      this.adminController.updateUser
    );

    return router;
  }
}

export default AdminRouter;
