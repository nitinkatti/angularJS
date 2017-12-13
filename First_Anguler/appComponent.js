var app = angular.module('appComp', []);

app.component('myCalc', {
    templateUrl: 'calculator.tpl.html',
    controller: 'MyCtrlCal',
    bindings:{
        resultText:'@'
    }
});

app.controller("MyCtrlCal", function () {

    this.onTextChange=function()
    {
        this.isCalculated = false;
    }

    this.onOperatorClick = function (operator) {

        this.isCalculated = true;

        if (operator === "+") {
            this.result = parseFloat(this.input1) + parseFloat(this.input2);
        }
        if (operator === "-") {
            this.result = parseFloat(this.input1) - parseFloat(this.input2);
        }
        if (operator === "/") {
            this.result = parseFloat(this.input1) / parseFloat(this.input2);
        }
        if (operator === "*") {
            this.result = parseFloat(this.input1) * parseFloat(this.input2);
        }
    }

 });