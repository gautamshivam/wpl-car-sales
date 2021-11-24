const router = require('express').Router();
const db = require('../config/db');
const collection = db.get('cars');

router.get('/details', (req, res, next) => {
   collection.find({_id}, (err, data) => {
       if(err) throw err;
       res.json(data);
   });
});

module.exports = router;