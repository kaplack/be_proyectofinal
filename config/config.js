import dotenv from "dotenv";
import path from "path";

const NODE_ENV = process.env.NODE_ENV || "develop";

dotenv.config({
  path: path.resolve(process.cwd(), `./config/${NODE_ENV}.env`),
});

export default {
  NODE_ENV: NODE_ENV,
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || 8080,
  TYPE_DB: process.env.TYPE_DB || "mongo",
  DB_MONGO_URL:
    process.env.DB_MONGO_URL ||
    "mongodb+srv://ABurga:g5kNcaBKcEodAE83@cluster0.4upmc2o.mongodb.net/?retryWrites=true&w=majority",
};
