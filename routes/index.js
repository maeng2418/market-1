var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});

router.get('/main', function(req, res, next) {
  res.render('main');
});

module.exports = router;
