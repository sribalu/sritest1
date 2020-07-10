
//var express = require('express');
var mongoose = require('mongoose');


//include model class

const User= mongoose.model('User');


insertuser  = (title,body) => {

var user=new User();

user.uname=body.uname;

user.password=body.password;


user.email=body.email;

try{
    user.save((err,doc) => {

        if(err){
            //console.log("loooo");
            console.log("error is there"+err);
        
        }
                 })

}
catch(err){

console.log(`error occured ${err}`);

}

}
    


checkauth = (a,b) => {


console.log("hai");


}






    module.exports = { insertuser,checkauth}