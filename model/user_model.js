

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userschema = new mongoose.Schema({
    uname: String,
    password:  String,
    email    :  String
  
    
});
module.export = mongoose.model('User', userschema);