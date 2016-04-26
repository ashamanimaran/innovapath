/*
function Employee(name,age){
    this.name=name;
    this.age=age;
   }
   Employee.prototype.personalDetails=function(){
       console.log("Name: "+this.name+" Age: "+this.age);
   }
   function Contractor(hourly_rate){
      this.hourly_rate=hourly_rate; 
   }
   
   //wrong way to inherit
   Contractor.prototype=new Employee("raj",23);
   Contractor.prototype.constructor=Contractor;
   var contractor1=new Contractor(35);
   contractor1.personalDetails();
    var contractor2=new Contractor(25);
   contractor2.personalDetails();
   // see how you are stuck with name and age assigned via prototype?
   */
   
   function Employee(name,age){
    this.name=name;
    this.age=age;
   }
   Employee.prototype.personalDetails=function(){
       console.log("Name: "+this.name+" Age: "+this.age);
   }
   function Contractor(name,age,hourly_rate){
      this.hourly_rate=hourly_rate; 
      Employee.call(this,name,age);
   }
   //right way to inherit
   Contractor.prototype=Object.create(Employee.prototype)
   Contractor.prototype.constructor=Contractor;
   var contractor1=new Contractor("ram",25,35);
   contractor1.personalDetails();
    var contractor2=new Contractor("raj",26,25);
   contractor2.personalDetails();
   // see how you assign name and age only at object creation. this is good!!!
   
   
   