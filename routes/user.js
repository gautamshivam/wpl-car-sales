const router = require('express').Router();
const db = require('../config/db');
const collection = db.get('users');

router.get('/', (req, res, next) => {
    console.log("fetching user...", req.user)
    res.send(req.user);
})

router.put('/', (req, res, next) => {
    collection.update({_id:req.user._id}, {$set: req.body}, (err, updatedUser) => {
        if(err) throw err; 
        console.log(updatedUser)
        res.send('user updated');
    });
})
module.exports = router;