import UserAPI from "../api/user.api.js";
import bcryptjs from "bcryptjs";
import logger from "../config/myLogger.js";

class SignUpController {
  constructor() {
    this.userService = new UserAPI();
  }

  signUpPageRenderService = (req, res) => {
    res.render("signup", { user: req.session.currentUser });
  };

  signUpUserService = async (req, res) => {
    let usersData = await this.userService.getUser();
    let userCtrl = usersData.some((u) => u.username == req.body.user);
    const avFile = req.file;

    if (!userCtrl) {
      let password = req.body.password;
      let salt = bcryptjs.genSaltSync(8);
      password = bcryptjs.hashSync(String(password), salt);

      let userData = {
        username: req.body.user,
        email: req.body.email,
        age: req.body.age,
        address: req.body.address,
        phone: req.body.phone,
        avatar: avFile.path,
        password,
      };
      //logger.info(userData);
      //const userSignUp = new UsersServices();
      this.userService.insertUser(userData);

      // //mail config
      // const mail = process.env.CORREO_ADM;
      // const passw = process.env.PASS;
      // const transporter = createTransport({
      //   host: "smtp.gmail.com",
      //   port: 465,
      //   auth: {
      //     user: mail,
      //     pass: passw,
      //   },
      // });
      // //send mail to Admin
      // transporter.sendMail({
      //   from: mail,
      //   //voy a enviar el correo a mi propio correo
      //   to: [mail],
      //   subject: "Coloso - Registro de usuario nuevo",
      //   html: `
      //     <h1>Nuevo Usuario<h1>
      //     <p>el usuario ${req.body.user} se registro en Coloso.</p>
      //   `,
      // });
      // //send mail to new user
      // transporter.sendMail({
      //   from: mail,
      //   to: [req.body.mail],
      //   subject: "Bienvenido a Coloso",
      //   html: `
      //     <h1>Bienvenido<h1>
      //     <p>Bienvenido a Coloso ${req.body.user}. Disfruta de nuestra plataforma.</p>
      //   `,
      // });

      res.redirect("/");
    } else {
      res.send("El nombre de usuario ya existe!");
    }
  };
}

export default SignUpController;
