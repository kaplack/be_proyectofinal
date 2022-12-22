import session from "express-session";
import MongoStore from "connect-mongo";

const mySession = () => {
  return session({
    store: new MongoStore({
      mongoUrl:
        "mongodb+srv://ABurga:g5kNcaBKcEodAE83@cluster0.4upmc2o.mongodb.net/?retryWrites=true&w=majority",
      advancedOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      dbName: "coloso",
      ttl: 60000,
    }),
    secret: "orwell",
    resave: false,
    saveUninitialized: true,
  });
};
export default mySession;
