; (function(){
   angular.module('myApp',[
           'ui.router'           
          ]).config(['$stateProvider', '$urlRouterProvider', '$httpProvider',routeconfig]);
       
function routeconfig($stateProvider,$urlRouterProvider,$httpProvider){
      $stateProvider
     .state('studentForm',{
            url:'/studentForm',
            templateUrl:'templates/studentForm.html',
            controller:'studentFormCtrl',
            css:'stylesheets/style.css'})
      .state('registerClasses',{
            url:'/studentForm/:name',
            templateUrl:'templates/registerClasses.html',
            controller:'registerClassesCtrl' })
      return $urlRouterProvider.otherwise('studentForm')
      }
})();