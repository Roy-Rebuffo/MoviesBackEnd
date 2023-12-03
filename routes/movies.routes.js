//CONTIENE LOS METODOS GET DEL MOVIES I Y CRUD COMPLETO PARA MOVIES II

const express = require('express')
const server = express();
const router = express.Router();
const Movie = require('../models/Movie');
const {upload} = require('../middleware/file.middleware')


router.get("/", async (req, res) => {
    try {
      const movies = await Movie.find();
      return res.status(200).json(movies);
    } catch (err) {
      return res.status(500).json("Error del servidor");
    }
  });
  
  router.get("/:title", async (req, res) => {
    const title = req.params.title;
    try {
      const moviesTitle = await Movie.find({ title });
      if (!moviesTitle.length) {
        return res.status(404).json("nada");
      }
      return res.status(200).json(moviesTitle);
    } 
    catch (err) {
      return res.status(500).json("Error del servidor");
    }
  });
  
  router.get('/year/:year', async (req, res, next) => {
    const {year} = req.params;
  
    try {
      const movieByYear = await Movie.find({ year: {$gt:year} });
      return res.status(200).json(movieByYear);
    } catch (err) {
      return next(error);
    }
  });
  
  router.get('/genre/:genre', async (req, res, next) => {
    const {genre} = req.params;
  
    try {
      const movieByGenre = await Movie.find({ genre });
      return res.status(200).json(movieByGenre);
    } catch (err) {
      return next(error);
    }
  });
  router.get('/id/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
      const movie = await Movie.findById(id);
      if (movie) {
        return res.status(200).json(movie);
      } else {
        return res.status(404).json('No movie found by this id');
      }
    } catch (err) {
      return next(error);
    }
  });


//HAGO EL METODO POST DEL SEÑOR DE LOS ANILLOS
  router.post('/create', upload.single('picture'), async (req, res) => {
    try {
       const moviePicture = req.file ? req.file.filename : null
        const newMovie = new Movie({
            title: req.body.title,
            director: req.body.director,
            year: req.body.year,
            genre: req.body.genre,
            picture: moviePicture
        });

        const createdMovie = await newMovie.save();
        return res.status(201).json(createdMovie);
    } catch (error) {
      return res.status(500).json("Error del servidor");
    }
});
router.delete('/:id', async (req, res) => {
  try {
      const {id} = req.params;
      const movieDeleted = await Movie.findByIdAndDelete(id);
      return res.status(200).json(movieDeleted);
  } catch (error) {
    return res.status(500).json("Error del servidor");
  }
});
//HAGO METODO PUT PARA EDITAR EL SEÑOR DE LOS ANILLOS A => LORD OF THE RINGS
router.put('/edit/:id', async (req, res, next) => {
  try {
      const { id } = req.params 
      const movieModify = new Movie(req.body) 
      movieModify._id = id 
      const movieUpdated = await Movie.findByIdAndUpdate(id , movieModify)
      return res.status(200).json(movieUpdated);
  } catch (error) {
      return next("Error del servidor")
  }
});


  module.exports = router