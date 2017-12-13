angular.module('myapp')
.component('productdetail', {
    bindings:{
        product:'<'
    },
    templateUrl: 'components/productdetails/productdetails.component.html'
});