angular.module('myapp')
.directive('myScroll',function(){
    return {
        restrict:'A',
        link:function(scope,element,attrs){   
        
            element.css('max-height',attrs.myScroll);
            element.css('overflow-y','auto');

        }
    }
});