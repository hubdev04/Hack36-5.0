// const express=require('express');
// const { default: mongoose } = require('mongoose');
// const app=express();
// const path=require('path');
// const static_path=path.join(__dirname,"../public/");
// //models

// //

// var dbConn=require("./db/conn");

// const process=require('process');
// const port=process.env.PORT || 3000;
// app.use(express.static(static_path));

// app.listen(port,()=>{
//     console.log("is running");
// });

const view=require("../node_modules/express/lib/view");
const application=require("../node_modules/express/lib/application");

const process=require('process');
const port=process.env.PORT || 5000;



const path=require('path');
const Register=require('./details');

var express=require("express");
var bodyParser=require("body-parser");
  
const mongoose = require('mongoose');
const { Console } = require('console');
const console = require("console");
mongoose.connect('mongodb://localhost:27017/new');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})
  
var app=express()
  
  
app.use(bodyParser.json());
const static_path=path.join(__dirname,"../");
console.log(static_path);
app.use(express.static(static_path));
app.use(bodyParser.urlencoded({
    extended: true
}));
  
app.post('/sign_up', function(req,res){
    var name = req.body.name;
    var email =req.body.email;
    var username = req.body.username;
    var password =req.body.password;
  
    var data = {
        "name": name,
        "email":email,
        "username":username,
        "password":password
    }
db.collection('details').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
              
    });
          
    return res.redirect('./public/HTML/login.html');
})
app.post('/login',async(req,res)=>{
    try {
        const username=req.body.username;
        
        const password=req.body.password;
       
        
            console.log(username);
            const user=await db.collection('details').findOne({username:username});
            console.log(user);
            if(user.password===password)
            {
                res.redirect("./public/HTML/1.index.html");
            }
            else{
                res.send("pass not correct");
            }
    
        
    } catch (error) {
        
        
        console.log(error);
        
    }
})
  
  
app.get('/',function(req,res){
// res.set({
//     'Access-control-Allow-Origin': '*'
//     });
 res.redirect('./index.html');
});
  
  
console.log("server listening at port 5000");
app.listen(port,()=>{
    console.log("is running");
});
