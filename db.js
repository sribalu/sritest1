//require('./auth.js');


var mongoose = require('mongoose');


//var MongoClient = require('mongoose').MongoClient;
var url = "mongodb://localhost:27017/waterplant";


mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true} ,function(err, db) {
    if (err) throw err;

console.log("sucess");

});

require('./model/user_model');
require('./model/customer_model');

