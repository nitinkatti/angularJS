angular.module('myApp')
.component('myButton', {
    templateUrl: 'src/component/mybutton.component.html',
    bindings: {
        myTitle: '@',
        onBtnClick: '&'
        
    },
    controller: function () {           
    }
});