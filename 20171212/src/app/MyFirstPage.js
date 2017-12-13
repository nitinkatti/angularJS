angular.module('myApp')
    .component('myFirstPage', {
        templateUrl: 'src/app/MyFirstPage.html',
        controller: function () {
            this.buttonClicked = function (val) {
                console.log(val);
                alert("you have clicked : "+val);
            }
        }
    });