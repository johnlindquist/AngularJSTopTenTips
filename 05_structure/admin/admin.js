var admin = angular.module("admin", ["ui.router"]);

admin.config(function ($stateProvider) {
    $stateProvider.state("admin",
        {
            url:"/admin",
            templateUrl:"admin/admin.html"
        })
});