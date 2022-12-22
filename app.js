import express from "express";
import AdminRouter from "./routes/admin.routes.js";
import homeRouter from "./routes/home.routes.js";
import loginRouter from "./routes/login.routes.js";
import signUpRouter from "./routes/signup.routes.js";
import logOutRouter from "./routes/logout.routes.js";
import mySession from "./config/sessionConfig.js";
import logger from "./config/myLogger.js";
import ProductRouter from "./routes/product_.routes.js";
import UserRouter from "./routes/users.routes.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(mySession());

app.use("/public", express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

const productRouter = new ProductRouter();
const usersRouter = new UserRouter();
const adminRouter = new AdminRouter();

app.use("/", homeRouter);
app.use("/products", productRouter.start());
app.use("/login", loginRouter);
app.use("/signup", signUpRouter);
app.use("/logout", logOutRouter);
app.use("/useradmin", adminRouter.start());

let PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  logger.info("app is running");
});
