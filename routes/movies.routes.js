const express = require('express')
const server = express();
const router = express.Router();
const Movie = require('../models/Movie');


router.get("/", async (req, res) => {
    try {
      const movies = await Movie.find();
      return res.status(200).json(movies);
    } catch (err) {
      return res.status(500).json(err);
    }
  });
  
  router.get("/movies/title/:title", async (req, res) => {
    const title = req.params.title;
    try {
      const moviesTitle = await Movie.find({ title });
      if (!moviesTitle.length) {
        return res.status(404).json("nada");
      }
      return res.status(200).json(moviesTitle);
    } 
    catch (err) {
      return res.status(500).json(err);
    }
  });
  
  router.get('/movies/year/:year', async (req, res) => {
      const {year} = req.params;
  
      try {
          const movieByYear = await Movie.find({ year: {$gt:year} });
          return res.status(200).json(movieByYear);
      } catch (err) {
          return res.status(500).json(err);
      }
  });
  
  router.get('/movies/genre/:genre', async (req, res) => {
      const {genre} = req.params;
      try {
          const movieByGenre = await Movie.find({ genre });
          return res.status(200).json(movieByGenre);
      } catch (err) {
          return res.status(500).json(err);
      }
  });
  
  router.get('/movies/id/:id', async (req, res) => {
      const id = req.params.id;
      try {
          const movie = await Movie.findById(id);
          if (movie) {
              return res.status(200).json(movie);
          } else {
              return res.status(404).json('No movie found by this id');
          }
      } catch (err) {
          return res.status(500).json(err);
      }
  });

  router.post('/', async(req,res)=>{
    try{
      console.log(req.body)
      res.send('exito')
    }
    catch(err){
      return res.status(500).json(err);
    }
  })
 

  module.exports = router