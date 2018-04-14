var app = angular.module("app", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when("/home", {
        templateUrl: "/home.html",
        controller: "homeCtrl",
        controllerAs: "home"
    });
    $routeProvider.when("/about", {
        templateUrl: "/about.html",
        controller: "aboutCtrl",
        controllerAs: "about"
    });
    $routeProvider.when("/contact", {
        templateUrl: "/contact.html",
        controller: "contactCtrl",
        controllerAs: "contact"
    });
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
})