var app = angular.module('myappCal', []);

app.controller("MyCtrlCal", function ($scope) {

    $scope.onTextChange=function()
    {
        $scope.isCalculated = false;
    }

    $scope.onOperatorClick = function (operator) {

        $scope.isCalculated = true;

        if (operator === "+") {
            $scope.result = parseFloat($scope.input1) + parseFloat($scope.input2);
        }
        if (operator === "-") {
            $scope.result = parseFloat($scope.input1) - parseFloat($scope.input2);
        }
        if (operator === "/") {
            $scope.result = parseFloat($scope.input1) / parseFloat($scope.input2);
        }
        if (operator === "*") {
            $scope.result = parseFloat($scope.input1) * parseFloat($scope.input2);
        }
    }
});