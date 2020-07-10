var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerschema = new mongoose.Schema({
   // uname: String,
    password:  String,
    address:  String,
    city:  String,
    state:  String,

    email    :  String
  
    
});
module.export = mongoose.model('Customer', customerschema);