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