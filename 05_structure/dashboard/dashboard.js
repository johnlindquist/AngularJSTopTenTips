var dashboard = angular.module("dashboard", []);

dashboard.config(function ($stateProvider) {
    $stateProvider.state("dashboard", {
        url:"/dashboard",
        templateUrl:"dashboard/dashboard.html",
        controller:"DashboardCtrl as dashboard"
    })
});

dashboard.controller("DashboardCtrl", function () {
    var dashboard = this;

    dashboard.things = [
        {name: "One"},
        {name: "Two"},
        {name: "Three"}
    ]
});
