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
       if(!user) res.send("No user exists");
       else {
           req.logIn(user, err => {
               if(err) throw err;
               res.send("Successfully authenticated");
               console.log(req.user);
           })
       }
    })(req, res, next);
});

router.post('/register', (req, res, next)=> {
    collection.findOne({username: req.body.username}, (err, user) => {
        if(err) throw err;
        if(user) res.send('user already exists');
        if(!user) {
            const hashedPassword = bcrypt.hashSync(req.body.password, 10);
            collection.insert({
                username: req.body.username,
                password: hashedPassword
            }, (err, newUser) => {
                res.send(newUser);
            })
        }
    })
})


module.exports = router;