angular.module('myapp')
    .directive('namecheck', function () {
            return {
                restrict: 'A',
                require:'ngModel',
                link: function (scope, element, attrs, ngModelCtrl) {
                    ngModelCtrl.$validators.namecheck = function (val)

                    {
                        if (val && val.startsWith('a'))
                            return false;
                        else
                            return true;
                    }


                }
            }
        }
    );