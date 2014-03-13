//https://github.com/angular-ui/ui-router
var bootcamp = angular.module("bootcamp", ["ui.bootstrap", "ui.router", "admin", "dashboard"]);

bootcamp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/admin");
});


bootcamp.controller("AppCtrl", function () {
});