var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cool, huh!', condition: false, anyArray: [1,2,3] });
});

router.get('/test/:id', function(req, res, next) {
  // I get the param set on my route url (:id) with req.params.id
  res.render('test', { output: req.params.id});
})

router.post('/test/submit', function(req, res, next) {
    // I post the param set on my POST request body (id from the index.hbs form) with req.body.id
  var id = req.body.id;
  res.redirect('/test/' + id);
});

module.exports = router;
