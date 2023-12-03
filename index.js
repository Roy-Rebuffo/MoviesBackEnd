
const express = require("express");
require("./utils/db.js");
const server = express();
const PORT = 3000;
const router = express.Router();
const session = require('express-session');
const {isAuthenticated} = require('./middleware/auth.middleware')
const moviesRoutes = require('./routes/movies.routes');
const cinemasRoutes = require('./routes/cinemas.routes');
const userRoutes = require('./routes/user.routes.js');
const passport = require('passport');
const MONGODB_URL = process.env.MONGODB_URL;


require('./authentication/passport.js');


const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');

server.use(
  session({
    secret: process.env.SESSION_SECRET, // ¡Este secreto tendremos que cambiarlo en producción!
    resave: false, // Solo guardará la sesión si hay cambios en ella.
    saveUninitialized: false, // Lo usaremos como false debido a que gestionamos nuestra sesión con Passport
    cookie: {
      maxAge: 3600000 // Milisegundos de duración de nuestra cookie, en este caso será una hora.
    },
    store: MongoStore.create({
      mongoUrl: MONGODB_URL,
  })
})
);
server.use(passport.initialize());
server.use(passport.session());
server.use(express.json());

server.use('/movies', isAuthenticated, moviesRoutes);
server.use('/cinemas', isAuthenticated, cinemasRoutes);
server.use('/user', userRoutes);


server.use((error, req, res, next) => {
	return res.status(error.status || 500).json(error.message || 'Unexpected error');
});
server.listen(PORT, () => {
  console.log(`server running in http://localhost:${PORT}`);
});


