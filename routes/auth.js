const router = require('express').Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require('../config/db');
const collection = db.get('users');

router.get('/logout', (req,res) => {
    req.logout();
    res.send("successfully logged out");
})
router.post('/login', (req, res, next) => {
   passport.authenticate("local", (err, user, info) => {
       if(err) throw err;
       if(!user) {
           res.status(200)
           res.send("no user exists with these credential");
        }
       else {
           req.logIn(user, err => {
               if(err) throw err;
               res.send("successfully authenticated");
               console.log(req.user);
           })
       }
    })(req, res, next);
});

router.post('/register', (req, res, next)=> {
    collection.findOne({username: req.body.username}, (err, user) => {
        if(err) throw err;
        if(user) {
            res.send('user already exists')
            return;
        };
        if(req.body.username === "") {
            res.send("empty username");
            return;
        }
        if (req.body.password === "") {
            res.send("empty password");
            return;
        }
        if (req.body.password.length < 6){
            res.send("password length should be at least 6");
            return;
        }
        var regEmail = /\S+@\S+\.\S+/;
        if(!regEmail.test(req.body.username)) {
            console.log('invalid email');
            res.send('invalid email format. should be like abc@domain.com');
            return;
        }

        let regPwd = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*+])[0-9a-zA-Z!@#$%^&*+]{6,}$/
        if(!regPwd.test(req.body.password)) {
            console.log('invalid pwd format');
            res.send('Invalid Password: must contain at least\none uppercase letter,\none number and\none special character (!,@,#,$,%,^,&,*,+).');
            return;
        }

        if(!user) {
            const hashedPassword = bcrypt.hashSync(req.body.password, 10);
            collection.insert({
                username: req.body.username,
                password: hashedPassword,
                favorites:[],
                purchases:[]
            }, (err, newUser) => {
                res.send(newUser);
            })
        }
    })
})


module.exports = router;