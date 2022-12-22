import { Router } from "express";

const logOutRouter = new Router();

logOutRouter.get("/", (req, res) => {
  let user = req.session.currentUser;
  req.session.destroy();
  res.redirect(`/?userExit=${user}`);
});

export default logOutRouter;
