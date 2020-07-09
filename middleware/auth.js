const Database = require('nedb');
const db = new Database({ filename: path.join(__dirname, '../database/account.db')});
const jwt = require('jsonwebtoken'); // jwt 만들기

let auth = (req, res, next) => {


    // 인증 처리를 하는 곳

    // 토큰을 가져온다.
    let token = req.cookies.jwt;

    jwt.verify(token, 'secretToken', function(err, decoded){
        // 토큰을 복호화한 후 유저를 찾는다.
        db.loadDatabase(function(err){
            db.find({"_id": decoded, "token": token}, function(err, user){
                if(err) throw err;
                if(!user[0]) return res.json({ isAuth: false, error: true })
        
                req.token = token; // 토큰과 유저 가져 올 수 있음
                req.user = user[0];
                next(); // 다음으로...
            });
        });
    });

    // 유저가 있으면 인증 OKay

    // 유저가 없으면 인증 No !
}

module.exports = { auth };