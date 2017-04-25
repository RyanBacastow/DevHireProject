angular.module("storePanels", [])

angular.module("storePanels").directive("hirePanels", function () {
    return {
        restrict: 'A',
        templateUrl: '/templates/store-panels.html',
        controller: ['$scope', function ($scope) {
            $scope.tab = 1;

            $scope.selectTab = function (newTab) {
                $scope.tab = newTab;
            };
        }]
    };
});


angular.module("storePanels").directive("addReview", function () {
    return {
        restrict: 'A',
        templateUrl: '/templates/add-review.html',
        controller: ['$scope', function ($scope) {
            $scope.review = {};
            $scope.addReview = function (people) {
                people.reviews.push($scope.review);
                $scope.newReview = [];
                $scope.review = {};
/*
                if (!people.reviews) {
                    $scope.newReview = [];
                    $scope.review = {};
                }
                people.reviews.push($scope.review);
*/
            };
        }]
    };
});
