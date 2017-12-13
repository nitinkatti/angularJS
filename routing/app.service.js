angular.module('myapp')
.service('ProductService',function($http,$q){
this.getProducts=function(){
    var defer=$q.defer();
    $http.get('/product.json')
    .then(function(response){
        
        defer.resolve(response.data)
    });
    
    return defer.promise;
}
this.getProductsById=function(id){
    var defer=$q.defer();
    $http.get('/product.json')
    .then(function(response){
        
        defer.resolve(
            response.data.find(function(item){
                return item.id==id;
            })
    
    )
    });
    
    return defer.promise;
}
});