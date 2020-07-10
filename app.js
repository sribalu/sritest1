var mongoose = require('mongoose');

var express = require('express');
var path = require('path');
const auth = require('./auth.js');
const db = require('./db');
const usercontroller = require('./controller/usercontroller.js');
const customercontroller = require('./controller/customercontroller.js');


var app = express();

app.set('view engine','ejs');



var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));


//hai

app.get('/',(req,res) => {
    res.render('login');
    
    
    });

app.post('/insertregister', function (req, res) {
    
    usercontroller.insertuser(req.title,req.body);

   // res.send('Data receillved:\n' + JSON.stringify(req.body));        
    res.render('login');

    });

   //sriiiiii


  //  app.get('/createcustomer',(req,res) => {


    //    customercontroller.insertcustomer();
        
        
      //  });

///customer

app.get('/createcustomer',(req,res) => {

    res.render('createlogin');
    
    
    });

///check
    app.post('/checkuser',(req,res) => {

        if(req.body.username != '' && req.body.password != ''){

            auth.checkauth(req.body.username,req.body.password);

        }
        //res.send('Data receillved:\n' +req.body.username+"  "+req.body.password);        
        
        });





  
//insert register

      


app.listen(process.env.PORT || 3019, process.env.IP || '0.0.0.0' );