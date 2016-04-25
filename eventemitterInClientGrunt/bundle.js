(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var myemitter=function(){};myemitter.prototype.on=function(a,b){myemitter[a]=myemitter[a]||[],myemitter[a].push(b)},myemitter.prototype.emit=function(a){myemitter[a].forEach(function(a){a()})},module.exports=myemitter;var emitter=require("./myemitter"),myemitter=new emitter;myemitter.on("event1",function(){console.log("mylistener1client I am being watched by grunt alter7")}),myemitter.on("event1",function(){console.log("mylistener2client I am being watched by grunt")}),myemitter.on("event1",function(){console.log("mylistener3client I am being watched by grunt")});var domready=require("domready");domready(function(){var a=document.getElementById("mybutton");a.addEventListener("click",function(){myemitter.emit("event1")})});
},{"./myemitter":2,"domready":3}],2:[function(require,module,exports){
var myemitter=function () {
 
}

myemitter.prototype.on=function(event,listener){
  myemitter[event]=myemitter[event]||[];
  myemitter[event].push(listener);
}
myemitter.prototype.emit=function(event){
  myemitter[event].forEach(function(listener){
    listener();
  })
}
module.exports=myemitter;
},{}],3:[function(require,module,exports){
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }

});

},{}]},{},[1]);
