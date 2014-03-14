var testable = angular.factory("myAwesomeData", function () {
    return {}
});


testable.controller("TestableCtrl", function (myAwesomeData) {
    //no myAwesomeData = {};
    //no $("myCustomHeader")
});

testable.directive("myCustomHeader", function () {
    return {

    }
});