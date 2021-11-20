const router = require('express').Router();
const db = require('../db');
const collection = db.get('books');

router.get('/', (req, res, next) => {
   collection.find({}, (err, data) => {
       if(err) throw err;
       res.json(data);
   });
});

module.exports = router;