angular.module('myapp')
.directive('appHighligth',function(){
    return {
        restrict:'EA',
        templateUrl:'Highligth.template.html',
        scope:{
            myTitle:'@',
            myVal:'='
        },
        link:function(scope,element,attrs){
            element.find('h1').css('color','red');

        }
    }
});

/*
restrict attribute defines

    E Element
    A attribute
    C class
    M command

scope attribute defines

    scope:true
    it will check expected property is aviable in his scope or not.
    if scope exist it will refer it else it will refer from parent scope.
    scope:false
    it does't create a new scope of own.
    scope:{} it works like component bingings

link:
*/