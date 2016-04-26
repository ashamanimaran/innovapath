you can add properties like
function Person(acc) {
    this.acc=acc;
    this.firstName='';
    this.lastName='';
    this.details=function(){
        console.log(`Acc: ${this.acc} Name:${this.firstName} ${this.lastName}`);
    }
}
in this case for every new Person(), an instance of details will be created.
To avoid this, 
Person.prototype.details=function(){
        console.log(`Acc: ${this.acc} Name:${this.firstName} ${this.lastName}`);
    }
    
the prototype is like the class object in java.There is only one instance of it.
you can add properties to prototype like Person.prototype.prop1="hello";
It is like creating a static variable. Every new Person() will now have prop1 available to it.
when any of them modify it, it will be modified for all objects(just like a static variable)
to access prop1:
Person.prototype.prop1
or
var p1=new Person();
p1.__proto__.prop1
or
p1.prop1 
or
p1.constructor.prototype.prop1

however note that p1.prop1="hi" will create a local prop1 with value "hi" and will block the visibility of prop1 in prototype.
so if you want to change the value of prop1 type p1.__proto__.prop1="hi"


