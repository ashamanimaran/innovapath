function Employee(){
    this.name="name";
    this.age=0;
   }
   Employee.prototype.personalDetails=function(){
       console.log("Name: "+this.name+" Age: "+this.age);
   }
   function Contractor(){
      this.hourly_rate=0; 
      Employee.call(this);//attach name and age to contractor
   }
  /*wrong way to do inheritance
  Contractor.prototype=Employee.prototype;//also inherit the functions attached to Employee.
  //this also makes the constructor function of Contractor point to Employee which is wrong.
  Contractor.prototype.constructor=Contractor;//set constructor back to Contractor
  //attach a new method to child
  Contractor.prototype.newMethodOnchild=function(){
      console.log("this method should only be available on child");
  }
  //why Contractor.prototype=Employee.prototype is wrong!
  //the new method is also attached to parent.
  new Employee().newMethodOnchild();
  Employee.prototype.newMethodOnParent=function(){
      console.log("this method should be available on both parent and child");
  }
  new Contractor().newMethodOnParent();
  */
  
  //right way to do inheritance
  //create a level of indiection by using Object.create instead of direct inheritance
 Contractor.prototype=Object.create(Employee.prototype);
 Contractor.prototype.constructor=Contractor;
 
 //attach a new method to child
  Contractor.prototype.newMethodOnchild=function(){
      console.log("this method should only be available on child");
  }
  //the new method is not attached to parent.Perfect!!!!!
 // new Employee().newMethodOnchild();
  
  Employee.prototype.newMethodOnParent=function(){
      console.log("this method should be available on both parent and child");
  }
  new Contractor().newMethodOnParent();
 
  function showInheritance(contractor){
       console.log(contractor.name);
       console.log(contractor.age);
       console.log(contractor.hourly_rate);
       console.log(contractor.__proto__.constructor);
       contractor.personalDetails();
   }
   var contractor=new Contractor();
   showInheritance(contractor);
  
   /* 
   to do inheritance ....

The answer tells to do:
DynamicBody.prototype = Object.create( PhysicsBody.prototype );

What is the reason to use Object.create?
 Why can't we just use:
DynamicBody.prototype = PhysicsBody.prototype;

?

You can (technically), but then any change you make to DynamicBody.prototype will also be made on PhysicsBody.prototype, i.e. it will affect all PhysicsBody instances, and that is usually not what you want.

Example:
function Foo() {};
Foo.prototype.say = function() {
   alert('Foo');
};
var foo = new Foo();

function Bar() {};
Bar.prototype = Foo.prototype;
Bar.prototype.say = function() {
    alert('Bar');
};

foo.say(); // alerts 'Bar'

Object.create adds one level of indirection.

*/