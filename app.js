var app = angular.module("myApp", [])
var friends = [{
        name: 'Oleksandra Golovkova',
        nickname: 'Full-Stack Python Developer',
        availableForHire:"You can contact me with opportunities.",
        isAvailable: true,
        notAvailable: false,
        projects: "https://github.com/SashaSasha1993",
        portfolio: "This is where I would have links to all the products/sites/apps I have designed.",
        qualifications: "This is where I would attach my resume and make my qualifications clear.",
        images: [{
            full: 'images/sasha.jpg',
            thumb: 'images/sasha.jpg'
        }]
    },
    {
        name: 'Ryan Bacastow',
        nickname: 'Full-Stack Python Developer',
        availableForHire:"You can contact me with opportunities.",
        isAvailable: true,
        notAvailable: false,
        projects: "https://github.com/RyanBacastow",
        portfolio: "This is where I would have links to all the products/sites/apps I have designed.",
        qualifications: "This is where I would attach my resume and make my qualifications clear.",
        images: [{
            full: 'images/ryan.jpg',
            thumb: 'images/ryan.jpg'
        }]
    },
    {
        name: 'Peter Yoon',
        nickname: 'Full-Stack Python Developer',
        availableForHire:"You can contact me with opportunities.",
        isAvailable: true,
        notAvailable: false,
        projects: "https://github.com/peteyoon14",
        portfolio: "This is where I would have links to all the products/sites/apps I have designed.",
        qualifications: "This is where I would attach my resume and make my qualifications clear.",
        images: [{
            full: 'images/peter.jpg',
            thumb: 'images/peter.jpg'
        }]
    },
    {
        name: 'Ananya Koduri',
        nickname: 'Full-Stack Python Developer',
        availableForHire:"You can contact me with opportunities.",
        isAvailable: true,
        notAvailable: false,
        projects:"https://github.com/ananya94",
        portfolio: "This is where I would have links to all the products/sites/apps I have designed.",
        qualifications: "This is where I would attach my resume and make my qualifications clear.",
        images:[{
            full: 'images/ananya.jpg',
            thumb: 'images/ananya.jpg'
        }]
    }]


app.controller("forHireCtrl", function ($scope) {
    $scope.friend = friends;
});

app.controller("panelController", function($scope){
    $scope.tab=1
    
    $scope.selectTab = function(newTab){
        $scope.tab = newTab;
    }
});

console.log('app.js is working')
