
const express = require("express");
require("./utils/db.js");
const server = express();
const PORT = 3000;
const router = express.Router();
const moviesRoutes = require('./routes/movies.routes');
const cinemasRoutes = require('./routes/cinemas.routes');

server.use(express.json());

server.use('/movies', moviesRoutes);
server.use('/cinemas', cinemasRoutes);


server.listen(PORT, () => {
  console.log(`server running in http://localhost:${PORT}`);
});
