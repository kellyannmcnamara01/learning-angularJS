
//create a module and name it eleApp
/*var eleApp = angular.module('eleApp', ['ngRoute']);

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
});*/

/*----------------------*/

var app = angular.module('eleAppTwo', []);
app.controller('eleCtrlTwo', function($scope, $http) {
    $http.get("http://localhost/5303/elementary/git-api/public/sections")
        .then(function(response) {
            var testing = response.data;
            //$scope.section = testing[0].section;
            //$scope.description = testing[0].description;
            //$scope.codesnippet = testing[0].codesnippet;
            var apple = [];
            for(var i = 0; i < testing.length; i++){
                //var section = testing[i].section;
                //var description = testing[i].description;
                //var codesnippet = testing[i].codesnippet;
                apple.push(testing[i]);
                //$scope.apple = testing[i].section;
                //$scope.description = testing[i].description;
                //$scope.codesnippet = testing[i].codesnippet;

                //console.log("section:" + $scope.section + " ||||||| desc:" + $scope.description + " |||||||| code snipttet:" + $scope.codesnippet);
                //console.log(apple);
            }
            //console.log(apple[0].section);
            $scope.apple = apple;
            console.log($scope.apple);
        });
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