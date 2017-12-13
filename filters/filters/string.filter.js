var myapp = angular.module('myApp');
myapp.filter('myName', function () {

    return function (val) {
        return " Test " + val;
    }
});

myapp.filter('myAge', function () {

    return function (val) {
        if (parseInt(val) > 10)
            return "You Are Senior!!";
        else
            return "You Are Junior!!";
    }
});

myapp.filter('myAgeWithCap', function () {

        return function (val,ageCap) {           
            if (parseInt(val) > parseInt(ageCap))
                return "You Are Senior!!";
            else
                return "You Are Junior!!";
        }
    });