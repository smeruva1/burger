// import express.Router()
const router = require('express').Router();

// import functionality to get all cats
const { getBurgers } = require('../../controllers/burger_controller');

// set up root '/' GET route to serve home page with burger data
router.get('/', (req, res) => {
  // get all burger data
  getBurgers()
    .then(burgerdata => {
      res.render('home', { burgers: burgerdata });
    })
    .catch(err => {
      res.status(500).end();
    });
});

module.exports = router;
