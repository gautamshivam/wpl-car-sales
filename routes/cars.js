const router = require('express').Router();
const db = require('../config/db');
const collection = db.get('cars');

router.get('/', (req, res, next) => {
   collection.find({}, (err, data) => {
       if(err) throw err;
       res.json(data);
   });
});

module.exports = router;