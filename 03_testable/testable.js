angular.factory("myAwesomeData", function () {
    return {}
});


angular.controller("TestableCtrl", function (myAwesomeData) {
    //no myAwesomeData = {};
    //no $("myCustomHeader")
});

angular.directive("myCustomHeader", function () {
    return {

    }
});