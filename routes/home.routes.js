import { Router } from "express";
import getHomeController from "../controller/home.controller.js";

const homeRouter = new Router();

homeRouter.get("/", getHomeController);

export default homeRouter;
