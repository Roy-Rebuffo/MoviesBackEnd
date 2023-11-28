
const express = require("express");
require("./utils/db.js");
const server = express();
const PORT = 3000;
const router = express.Router();
const moviesRoutes = require('./routes/movies.routes.js');
const cinemasRoutes = require('./routes/cinemas.routes.js');


server.use('/movies', moviesRoutes);
server.use('/cinemas', cinemasRoutes);




server.use(express.json());

server.listen(PORT, () => {
  console.log(`server running in http://localhost:${PORT}`);
});
