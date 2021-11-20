const monk = require('monk');
var db = monk('localhost:27017/book-store')
module.exports = db; 