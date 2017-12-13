angular.module('myapp', []);

angular.module('myapp')
    .component('app', {
        templateUrl: 'app.component.html',
        controller: function () {
            this.onSubmit = function(myform){
                console.log(myform);
                console.log(myform.usernameinput.$viewValue);
            };
        }
    });