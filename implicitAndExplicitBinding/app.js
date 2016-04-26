function Person(acc) {
    this.acc=acc;
    this.firstName='';
    this.lastName='';
    this.details=function(){
        console.log(`Acc: ${this.acc} Name:${this.firstName} ${this.lastName}`);
    }
}
var p1=new Person(1);
p1.firstName="jim";
p1.lastName="cramer";
p1.details();//implicit binding-use whatever is to the left of dot as 'this'

function printdetails(param1,param2){
    console.log(`Acc: ${this.acc} Name:${this.firstName} ${this.lastName}`);
    console.log(param1 +" ,"+param2);
}


//explicit binding -use a function that is free and not bound to any object
printdetails.call(p1,"param1","param2");//pass args individually
printdetails.apply(p1,["param1","param2"]);//pass an array
var newFunction=printdetails.bind(p1,"param1","param2");//instead of invoking the function,
// will return a new function which we can call later.
newFunction();

//new binding
// when you call a constructor function using new keyword, the 'this' inside the constructor function is bound to the 
//new object that is created

//window binding
//when you call a fuction that is not implicitly or explicitly bound to anything, it simply binds
//to the window object and tries to see if it finds the properties it needs on the window object

