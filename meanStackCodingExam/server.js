/// <reference path="typings/browser/ambient/express-serve-static-core/index.d.ts" />
/// <reference path="typings/browser/ambient/serve-static/index.d.ts" />
/// <reference path="typings/browser/ambient/express/index.d.ts" />
/// <reference path="typings/browser/ambient/node/index.d.ts" />
/// <reference path="typings/browser/ambient/body-parser/index.d.ts" />
var express=require('express');
var server=express();
var bodyparser=require('body-parser');
server.use(bodyparser.urlencoded({extended: true})); 
var LoginMapper=require('./dao');
server.get("/",function(req,res){
    res.sendFile(__dirname+"/login.html");
});
server.get("/app.js",function(req,res){
    res.sendFile(__dirname+"/app.js");
});
server.get("/register.html",function(req,res){
    res.sendFile(__dirname+"/register.html");
});

server.post("/login",function(req,res){
   var user= req.body.user;
   var pwd=req.body.pwd;
   console.log(user+","+pwd);
   LoginMapper.find({"user":user,"pwd":pwd},function(err,result){
       if(err!=null){
        res.status(500);
         res.send('<h1>Mongoose server not running</h1>');
      }else{
           if(result.length==0){
                       res.status(400);
                      res.send('<h1>user not registered</h1>');  
           }else{
                    res.status(200);
                   res.send(result);         
           }

       }
    
   });
});
server.post("/register",function(req,res){
   var user= req.body.user;
   var pwd=req.body.pwd;
   var firstName= req.body.firstName;
   var lastName=req.body.lastName;
   var accType=req.body.accType;
   var options=req.body.options;
   console.log(user+","+pwd);
   LoginMapper.find({"user":user},function(err,result){
       if(err!=null){
         res.status(500);
         res.send('<h1>Mongoose server not running</h1>');
       }else{
           if(result.length==0){
               //create a new user with all details taken from modal form
                      LoginMapper.create({"user":user,"pwd":pwd,"firstName":firstName,"lastName":lastName,"accType":accType,"options":options},function(err,res){
                       console.log("new user created!")   
                      });
                       res.status(200);
                      res.sendFile(__dirname+"/welcome.html");   
           }else{
                    res.status(400);
                    res.send('<h1>choose a different login</h1>');         
           }

       }
    
   });
});
server.listen("9999",'localhost');




