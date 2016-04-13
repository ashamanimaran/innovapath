var SCRIPT2=require('./script2');
var SCRIPT3=require('./script3');

var script1fn=function(){
    console.log("I am script1 function");
   SCRIPT3.script2fn();
   SCRIPT2.script2fn();
}

script1fn();
