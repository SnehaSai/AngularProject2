
;(function() {  
var studentFormFn= function($scope, $state){          
    $scope.submitBtn= submitFn;           
    function submitFn(){
        debugger;
         if((!$scope.firstName || $scope.firstName=="") || (!$scope.lastName || $scope.lastName=="") || (!$scope.UniversityName || $scope.UniversityName=="") || (!$scope.field || $scope.field=="")  || (!$scope.phonenumber || $scope.phonenumber=="") || (!$scope.email && $scope.email=="") || (!$scope.percentage && $scope.percentage!="" )){
            $scope.registration = "Please Enter the required Fields";           
         }
         else{
            $scope.registration="";            
            $state.go("registerClasses", {name:$scope.firstName});
         }
    }
}

var registerClasses = function($scope, $stateParams){
  $scope.submit= submitfun;
  $scope.name= $stateParams.name;
  function submitfun(){
  
  }
}

angular.module('myApp')  
       .controller('studentFormCtrl',studentFormFn) 
       .controller('registerClassesCtrl',registerClasses)
})();

