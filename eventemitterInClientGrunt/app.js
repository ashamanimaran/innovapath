/// <reference path="typings/browser/ambient/jquery/index.d.ts" />

var emitter=require("./myemitter");
var myemitter=new emitter();
myemitter.on("event1",function(){
      console.log("mylistener1client I am being watched by grunt alter7");
    })
    myemitter.on("event1",function(){
      console.log("mylistener2client I am being watched by grunt");
    })
     myemitter.on("event1",function(){
      console.log("mylistener3client I am being watched by grunt");
    })
var domready = require("domready");

domready(function () {
var button = document.getElementById("mybutton"); // add id="my-button" into html
button.addEventListener('click', function checkForBlankSpace(){
    myemitter.emit("event1");
} );
  
});
 