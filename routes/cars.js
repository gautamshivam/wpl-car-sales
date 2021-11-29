const router = require('express').Router();
const db = require('../config/db');
const collection = db.get('cars');
const user = db.get('users');

router.get('/', (req, res, next) => {
   collection.find({}, (err, data) => {
       if(err) throw err;
       data = data.filter((item) => item.isAvailable == true);
       res.json(data);
   });
});

router.put('/purchase/:id', (req, res, next) => {
    collection.update({_id:req.params.id}, {$set: req.body}, (err, upadatedCars) => {
        if(err) throw err;
        collection.findOne({_id:req.params.id}, (err, purchasedCar) => {
            user.findOne({_id:req.user._id}, (err, owner) => {
                owner.purchases = [purchasedCar, ...owner.purchases];
                user.update({_id:req.user._id}, {$set: owner}, (err, updatedUser) => {
                    if(err) throw err; 
                    console.log("purchase added to user")
                    res.send('purchase success');
                });
                
            })
        })
        console.log("purchase removed from listing");
    });
})

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

router.put('/edit/:id', (req, res, next) => {
    console.log('updating car..')
    collection.update({_id:req.params.id}, {$set: {
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
        
    }}, (err, updatedCar) => {
        if(err) throw err;
        res.send(updatedCar);
        console.log('updated car..')
    })
});

module.exports = router;