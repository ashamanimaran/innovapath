/// <reference path="typings/browser/ambient/angular/index.d.ts" />
var myApp=angular.module('myApp',['watchDom']);
myApp.controller('myController',['$scope','$window','watchDom',function($scope,$window,watchDom){
/*
$scope.num1=0;
$scope.num2=0;
$scope.calculateSum=function(){
    $scope.sum=$scope.num1+$scope.num2;
}
*/ 
//in the avove code $scope.num1 and $scope.num2 are bound to thier corresponding fields in view and whenever any 
//of these change in the model, the view also gets updated and vice versa.
//but a change in num1 or num2 does not automatically update $scope.sum. We do it by clicking the calculateSum button

// we want to establish a watch on num1 and num2 that will automatically update sum
//you can only watch variables in angular scope.
/*
$scope.num1=0;
$scope.num2=0;
$scope.$watch('num1',function(newValue,oldValue){
  $scope.sum=$scope.num1+$scope.num2;
});
$scope.$watch('num2',function(newValue,oldValue){
  $scope.sum=$scope.num1+$scope.num2;
});*/

//watching changes to dom nodes like divs
watchDom.$watch(document.getElementById("parentDom"), function (newValue, oldValue) {
console.log("parentDom changed from "+oldValue +" to "+newValue);
});
var node = document.createElement("P");                 // Create a <p> node
 var textnode = document.createTextNode("Water");         // Create a text node
 node.appendChild(textnode);                              // Append the text to <li>
 document.getElementById("parentDom").appendChild(node);

}]);

