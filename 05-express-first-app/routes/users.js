var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// if we want to navigate to localhost:8000/users/detail 
router.get('/detail', function(req, res, next) {
  res.send('This are user details');
});

module.exports = router;