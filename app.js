var app = angular.module("myApp", ['storePanels', 'avatar', 'ngRoute'])

app.controller("forHireCtrl", ['$scope', '$http', 'AvatarFactory', function ($scope, $http, AvatarFactory) {
    $scope.Avatar = AvatarFactory;
    $http.get('/friends.json').then(function (result) {
        $scope.friend = result.data;
        $scope.avatar = AvatarFactory;
    })
}]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {       //$locationProvider.html5Mode(true);
            $routeProvider.when("/", {
                templateUrl: "templates/main.html"
            }).when("/page1", {
                templateUrl: "templates/page1.html"
            }).when("/page2", {
                templateUrl: "templates/page2.html",
                controller: function () {}
            });
        }]);

        console.log('app.js is working')
