/*
var k="I am global";

var myOuterFunction=function(){
   var j="I am from outer function";
  this. myFunc=
   function(){
    var i="I am inside the function";
    console.log(i);
    console.log(j);
    console.log(k);
};
    
}
new myOuterFunction().myFunc();
*/
/*
var k="I am global";

var myOuterFunction=function(){
   var j="I am from outer function";
   var myFunc=
   function(){
    var i="I am inside the function";
    console.log(i);
    console.log(j);
    console.log(k);
};
  myFunc();  
}
myOuterFunction();*/

//not freezing the value of i for settimeout

var g="I am global";
var myOuterFunction=function(){
   var num=0;
   var o="I am from outer function: ";
   var myfunc=
   function(){
    var i="I am inside the function";
    console.log(i);
    console.log(o + num);
    console.log(g);
};
var incrementNum=function(){
    num++;
    console.log("num is "+num)
  }
 setInterval(incrementNum,1000);
 
setInterval(
    function(){
        myfunc();
    }
    ,5000);
            }
myOuterFunction();


//freezing the value of i for settimeout
/*
var g="I am global";
var myOuterFunction=function(){
   var num=0;
   var o="I am from outer function: ";
   var myfunc=
   function(num){
    var i="I am inside the function";
    console.log(i);
    console.log(o + num);
    console.log(g);
};
var incrementNum=function(){
    num++;
    console.log("num is "+num)
  }
 setInterval(incrementNum,1000);
 
setInterval(
    function(actuallynum){
      return function(){
        myfunc(actuallynum);
    };
     }(num)
    ,5000);
            }
myOuterFunction();
*/
//wrong way to use setTimeout

/*
var myfunc=function(){
    var printi=function(){
        console.log("----------");
        console.log("i="+i);
    }
    for(i=0;i<10;i++){
         setTimeout(printi,1000);
    }
}
myfunc();
*/
//right way to use setTimeout
/*
var myfunc=function(){
    var printi=function(){
        console.log("----------");
        console.log("i="+i);
    }
    for(i=0;i<10;i++){
         setTimeout(
             function(){
                 printi();
             }            
            ,1000);
    }
}
myfunc();*/
//freezing the value of i for the inner function
/*
var myfunc=function(){
    var printi=function(i){
        console.log("----------");
        console.log("i="+i);
    }
    for(i=0;i<10;i++){
         setTimeout(
             function(i){
                return function(){
                 printi(i);  
             } ; 
             }(i)
                       
            ,1000);
    }
}
myfunc();*/
//in this we are saying to printi - don't look into your parent's scope for the value of i
// the i in your parent's scope would have been changed by the time you execute
//i will pass a copy of i into your local scope at the point of time when I delegate you to setTimeout. Just use it
