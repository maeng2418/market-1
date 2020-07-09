const express = require('express');
const router = express.Router();
const Database = require('nedb');
const path = require('path');

const db = new Database({filename: path.join(__dirname, '../database/account.db'), autoload:true});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//회원가입
router.post('/signup', function(req, res, next) {
  console.log(req.body);
  db.insert(req.body, (err, userInfo) =>{
    console.log(userInfo);
  })
  return res.status(200).json({success: true})
});

//로그인
router.post('/signin', function(req, res, next) {
  console.log("로그인 정보 :", req.body);
  const inputId = req.body.id;
  db.find({ id: inputId }, function(err, docs){
    console.log(docs);
    if(docs.length !== 0){
      
    }else{

    }
  })
});


module.exports = router;
