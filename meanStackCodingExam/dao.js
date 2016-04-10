/// <reference path="typings/browser/ambient/mongoose/index.d.ts" />
/// <reference path="typings/browser/ambient/node/index.d.ts" />

var mongoose = require('mongoose');
    var db = mongoose.connect('mongodb://localhost/bookshop');
    var Schema = mongoose.Schema;
//the schema represents the table schema(DDL) in mongoose
    var UserInfo = new Schema({
    "user" : String,
    "pwd" : String,
    "firstName":String,
    "lastName":String,
    "accType":String,
    "options":Array
    });
 //the model represents the table/collection in mongoose
 //you use the model to interact with the actual table/collection
 //mongoose pluralises the table/collection name. If the name of ur table is logins, you should specify only 'login' as table name
 
    var LoginMapper=mongoose.model('login', UserInfo);
//find record
/*
 LoginInfo.find({},function (err,res) {
        console.log(res);
    })
 */
//add record
/*
LoginInfo.create({"user":"tim","pwd":"tim1234"},function(err,res){
     console.log(res);
})
*/
//delete record
/*
LoginInfo.remove({"user":"tim"},function(err,res){
    console.log(res);
})*/

module.exports=LoginMapper;


