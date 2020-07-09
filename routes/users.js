const express = require('express');
const router = express.Router();
const Database = require('nedb');
const path = require('path');

const db = new Database({filename: path.join(__dirname, '../database/account.db'), autoload:true});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function(req, res, next) {
  console.log(req.body);
  db.insert(req.body, (err, userInfo) =>{
    console.log(userInfo);
  })
  return res.status(200).json({success: true})
});

module.exports = router;
