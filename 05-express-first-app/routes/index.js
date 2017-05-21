var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

// if we want to navigate to localhost:8000/users/detail 
router.get('/users/detail', function(req, res, next) {
  res.send('This are user details');
});

module.exports = router;
