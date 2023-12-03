const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/User");
const saltRounds = 10;

passport.use(
  "register",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },

    async (req, email, password, done) => {
      try {
        const previeousUser = await User.findOne({ email: email });
        //Lanzo error si el usuario ya esta registrado
        if (previeousUser) {
          const error = new Error("El usuario ya existe");
          return done(error);
        }
        //Si no existe, encriptamos la contraseña
        const pwdHash = await bcrypt.hash(password, saltRounds);
        const newUser = new User({
          email: email,
          password: pwdHash,
        });
        const savedUser = await newUser.save();
        done(null, savedUser);
      } catch (err) {
        return done(err);
      }
    }
  )
);
//creamos estrategia para login. ver si un usuario existe y si existe comparar la contraseña hasheada con la contraseña que se ha enviado

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const currentUser = await User.findOne({ email: email });
        //si  no existe el usuario , lanzamos error
        if (!currentUser) {
          const error = new Error("El usuario no existe");
          return done(error);
        }
        // y si existe, comparamos las contraseñas
        const isValidPassword = await bcrypt.compare(
          password,
          currentUser.password
        );
        if (!isValidPassword) {
          const error = new Error("La contaseña no es valida");
          return done(error);
        } else {
          currentUser.password = null;
          return done(null, currentUser);
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

// AÑADO ESTAS DOS LINEAS PARA ARREGLAR ESTE ERROR QUE ME SALIA EN EL PASSPORT: "Failed to serialize user into session" CON ESTO SI QUE ME ARREGLA LOS ERRORES Y ME DEVUELVE LA INFO QUE NECESITO
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
