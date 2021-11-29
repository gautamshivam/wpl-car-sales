const monk = require('monk');
//var db = monk('localhost:27017/car-sales')
var db = monk('mongodb+srv://shivam:cometutd@cluster0.fmpfq.mongodb.net/car-sales?retryWrites=true&w=majority')
db.then(() =>{
    console.log("connection success");
}).catch((e)=>{
    console.error("Error !",e);
});
module.exports = db; 