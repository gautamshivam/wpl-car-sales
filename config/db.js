const monk = require('monk');
var db = monk('localhost:27017/car-sales')
module.exports = db; 