const express = require("express");
const router = express.Router();
const Cinema = require("../models/Cinema");

router.get("/", async (req, res) => {
  try {
    const cinemas = await Cinema.find().populate("movies");
    return res.status(200).json(cinemas);
  } catch (error) {
    return res.status(500).json("Error del servidor");
  }
});

router.post("/create", async (req, res) => {
  try {
    const newCinema = new Cinema({
      name: req.body.name,
      location: req.body.location,
      movies: [],
    });

    const createdCinema = await newCinema.save();
    return res.status(201).json(createdCinema);
  } catch (error) {
    return res.status(500).json("Error del servidor");
  }
});

router.put("/:id/add-movies", async (req, res) => {
  try {
    const cinemaId = req.params.id;
    const moviesIds = req.body.moviesIds;
    const updatedCinema = await Cinema.findByIdAndUpdate(cinemaId, {
      $push: { movies: { $each: moviesIds } },
    });
    return res.status(200).json(updatedCinema);
  } catch (error) {
    return res.status(500).json("Error del servidor");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const cinemaDeleted = await Cinema.findByIdAndDelete(id);
    return res.status(200).json(cinemaDeleted);
  } catch (error) {
    return res.status(500).json("Error del servidor");
  }
});

module.exports = router;
