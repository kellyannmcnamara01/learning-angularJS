
//create a module and name it eleApp
var eleApp = angular.module('eleApp', ['ngRoute']);

eleApp.controller('mainController', function($scope){
   $scope.message = "hi";
   $scope.names = [
       {
           name:'Kelly Ann',
           country:'Canada'
       },
       {
           name:'Jess',
           country:'Canada'
       }
   ]
});

/*//config the routes
eleApp.config(function($routeProvider) {
    $routeProvider
        //route for the homepage
        .when('/', {
            templateUrl : 'home.html',
            controller : 'mainController'
        })
        //route for the index
        .when('/tof', {
            templateUrl : 'tof.html',
            controller : 'tofController'
        })
}); //end eleApp.config

//create a controller and inject the Angular $scope for the home page
eleApp.controller('mainController', function($scope){
    $scope.message = "Home Page Injection";
}); //end eleApp.controller for mainController

//create a controller and inject the Angular $scope for the index
eleApp.controller('tofController', function($scope){
    $scope.message = "TOC Page Injection";
}); //end eleApp.controller for indexController*/