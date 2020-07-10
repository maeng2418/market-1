var express = require('express');
var router = express.Router();
const path = require('path');

const Database = require('nedb');
const db = new Database({ filename: path.join(__dirname, '../database/account.db')});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', { title: 'Express' });
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

router.get('/complete', function(req, res, next) {
  const id = req.query.id;
  console.log("db id : ", req.query);
  db.loadDatabase(function(err){
    db.find({_id: id}, function(err, docs){
      console.log("userinfo : ", docs);
      res.render('complete', {name: docs[0].name, email: docs[0].email, phone: docs[0].phone, id: docs[0].id});
    });
  })
});

module.exports = router;
