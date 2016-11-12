var app = angular.module('ententeApp', ['ngRoute', 'ngResource', 'ngCookies'])

app.config(['$resourceProvider', function($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/main.html',
            controller: 'MainController'
        })
        .when('/register', {
            templateUrl: '../views/register.html',
            controller: 'RegisterController'
        })
        .when('/questions', {
            templateUrl: '../views/questions.html',
            controller: 'QuestionsController'
        })
        .when('/profile', {
            templateUrl: '../views/profile.html',
            controller: 'ProfileController'
        })
})
