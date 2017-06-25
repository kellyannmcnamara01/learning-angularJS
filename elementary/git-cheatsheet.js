var app = angular.module('eleAppTwo', []);

// trying to make a filter for unique section names
/*app.filter('unique', function () {
 return function (item) {
 return function (item) {
 return item.toUpperCase();
 }; //end return function
 }); //enf app.filter*/



app.controller('eleCtrlTwo', function($scope, $http) {
    //start of the http.get for the git sections
    $http.get("http://localhost/5303/elementary/git-api/public/sections")
        .then(function(response) {
            var testing = response.data;
            var apple = [];
            for(var i = 0; i < testing.length; i++){
                apple.push(testing[i]);
            }
            $scope.apple = apple;
            $scope.prev = "";
        }); //end of http.get for the git sections
});

/*
 app.controller('eleCSS', function($scope, $http) {
 //start of the http.get for the git sections
 $http.get("http://localhost/5303/elementary/git-api/public/sections")
 .then(function(response) {
 var testing = response.data;
 var apple = [];
 for(var i = 0; i < testing.length; i++){
 apple.push(testing[i]);
 }
 $scope.apple = apple;
 $scope.prev = "";
 }); //end of http.get for the git sections
 });*/