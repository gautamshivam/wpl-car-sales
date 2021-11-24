const collection = require('./db').get('users');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;


module.exports = function(passport) {
    passport.use(
        new localStrategy((username, pwd, done) => {
            collection.findOne({username:username}, (err, user) => {
                if(err) throw err;
                if(!user) return done(null, false);
                bcrypt.compare(pwd, user.password, (err, result) => {
                    if(err) throw err;
                    if(result === true) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                })
            })
        })
    )

    passport.serializeUser((user, cb) => {
        cb(null, user._id)
    })
    passport.deserializeUser((id, cb) => {
        collection.findOne({_id:id}, (err, user) => {
            cb(err,user);
        })
    })
}