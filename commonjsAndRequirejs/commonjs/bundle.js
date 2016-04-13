(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var SCRIPT2=require('./script2');
var SCRIPT3=require('./script3');

var script1fn=function(){
    console.log("I am script1 function");
   SCRIPT3.script2fn();
   SCRIPT2.script2fn();
}

script1fn();

},{"./script2":2,"./script3":3}],2:[function(require,module,exports){
var SCRIPT2={
    script2fn:function(){
    console.log("I am script2 function");
}
};

module.exports=SCRIPT2;

},{}],3:[function(require,module,exports){
var SCRIPT3={
    script2fn:function(){
    console.log("I am script3 function");
}
};

module.exports=SCRIPT3;
},{}]},{},[1]);
