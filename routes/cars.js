const router = require('express').Router();
const db = require('../config/db');
const collection = db.get('cars');

router.get('/', (req, res, next) => {
   collection.find({}, (err, data) => {
       if(err) throw err;
       res.json(data);
   });
});


router.post('/add', (req, res, next) => {
    collection.insert({
        title: req.body.title,
        images: req.body.images,
        make: req.body.make ,
        model: req.body.model ,
        price: req.body.price ,
        condition: req.body.condition ,
        mileage: req.body.mileage ,
        bodyType: req.body.bodyType ,
        transmission: req.body.transmission ,
        year: req.body.year ,
        colorExt: req.body.colorex ,
        colorInt: req.body.colorin ,
        fuelType: req.body.fuelType ,
        noOfOwners: req.body.noOfOwners ,
        features: req.body.features ,
        isAvailable:req.body.isAvailable
        
    }, (err, newCar) => {
        res.send(newCar);
    })
});

module.exports = router;