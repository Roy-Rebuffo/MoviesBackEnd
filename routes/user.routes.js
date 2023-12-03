const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const router = express.Router();


router.get('/', async(req, res, next) =>{
  const users = await User.find();
  return res.status(201).json(users);
})


router.post("/register", (req, res, next) => {
  const done = (error, user) => {
    if (error) {
      return next(error);
    }
    req.logIn(user, (error) => {
      if (error) {
        return next(error);
      }
      return res.status(201).json(user);
    });
  };

  passport.authenticate("register", done)(req);
});

router.post('/login', (req, res, next)=>{
  const done = (error, user)=>{
    if(error) return next(error);
    req.logIn(user, (error)=>{
      if(error){
        return next(error);
      }
      return res.status(200).json(user);
    })
  }
  passport.authenticate('login', done)(req)
})

module.exports = router;
