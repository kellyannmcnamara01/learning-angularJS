var app = angular.module('eleAppTwo', []);


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

app.controller('eleCss', function($scope, $http) {
    $http.get("http://localhost/5303/elementary/git-api/public/cssSections")
        .then(function(response) {
            var testing = response.data;
            var cssSection = [];
            for(var i = 0; i < testing.length; i++){
                cssSection.push(testing[i]);
            }
            //console.log(apple[0].section);
            $scope.cssSection = cssSection;
            $scope.prev = "";
            console.log($scope.cssSection);
        });
});

