const express = require('express');
const router = express.Router();
const Database = require('nedb');
const path = require('path');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const db = new Database({filename: path.join(__dirname, '../database/account.db'), autoload:true});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//회원가입
router.post('/signup', function(req, res, next) {
  db.find({id: req.body.id}, (err, userInfo)=>{
    if(userInfo.length > 0){
      // 아이디 중복
      return res.status(200).json({success: false, duplicate: true})
    }else{
      // 회원가입진행
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if(err) return res.status(400).send(err);
        bcrypt.hash(req.body.password, salt, (err, hash)=> {
          if(err) return res.status(400).send(err);
          req.body.password = hash;
          db.insert(req.body, (err, userInfo) =>{
            return res.status(200).json({success: true})
          })
        })
      })
    }
  })
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
