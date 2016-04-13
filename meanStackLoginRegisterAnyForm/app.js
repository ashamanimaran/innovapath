var myApp=angular.module('myApp',['ngSanitize','ui.bootstrap']);
myApp.controller('myController',function($scope,$http,$sce,$uibModal,$log){
  $scope.htmlResponse=$sce.trustAsHtml("html response will be displayed here");
    $scope.login=function(){
        console.log($scope.user);
        console.log($scope.pwd);
        var jsondata={
            user:$scope.user,
            pwd:$scope.pwd
        }
       $http({
           method:'POST',
           url:"/login",
           headers: {'Content-Type': 'application/x-www-form-urlencoded'},
           data:$.param(jsondata)
       }).then(function(response){
          console.log("login success");
          $scope.htmlResponse=response.data;
          console.log(response.data);
       },function(response){
           console.log("login error");
          $scope.htmlResponse=response.data;
           console.log(response.data);
       })
    }   //end of login 
    
    //setup for registration dialog box
    $scope.returnedValues={};
      $scope.registerUser=function(){
        
      var modalInstance = $uibModal.open({
      templateUrl: 'register.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
    });
    
  //**************register user********************  
  $scope.nextCallback=false;//do next callback only if current callback returns success
  modalInstance.result.then(function (info) {//user pressed ok button in register modal dialog box
  $scope.info=info;
  $scope.nextCallback=true;
   }, function (reason) {
  $scope.nextCallback=false;//user pressed cancel button in register modal dialog box
  console.log(reason);
    }).then(
        function(){
        if($scope.nextCallback){//the user opted to register by pressing the ok button
     var jsondata={
            user:$scope.user,
            pwd:$scope.pwd}
            //merge data from two json objects - from login page + register dialog box
          $scope.savedata=$.extend(true, {}, jsondata, $scope.info);
         $http({//send data to server
           method:'POST',
           url:"/register",
           headers: {'Content-Type': 'application/x-www-form-urlencoded'},
           data:$.param($scope.savedata)
       }).then(function(response){//handle http success/failure
           console.log("server http success");
           $scope.htmlResponse=response.data;
          console.log(response.data);},function(response){
           console.log("server http error");
          $scope.htmlResponse=response.data;
           console.log(response.data); });
        
        } //end of if 
        }//end of anonymous
     );
   }
   $scope.register=function(){
        console.log($scope.user);
        console.log($scope.pwd);
        $scope.registerUser();//to display modal dialog
    }    //end of register
 });
angular.module('myApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {
  $scope.ok = function (info) {
     $uibModalInstance.close(info);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss("the user does not want to register");
  };
});
//***********************************************************
