angular.module('myapp')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state({
            name: 'home',
            url: '/home',
            template: '<home></home>'
        });
        $stateProvider.state({
            name: 'about',
            url: '/about',
            component: 'about'
        });
        $stateProvider.state({
            name: 'contact',
            url: '/contact',
            template: '<contact></contact>'
        });
        $stateProvider.state({
            name: 'products',
            url: '/products',
            component: 'productlist',
            resolve: {
                items: function (ProductService) {
                    
                    return ProductService.getProducts();
                    
                }
            }

        });
        $stateProvider.state({
            name: 'productdetail',
            url: '/productdetail/{productId}',
            component: 'productdetail',
            resolve: {
                product: function (ProductService,$transition$) {
                    var prId=$transition$.params().productId;                    
                    return ProductService.getProductsById(prId);
                    
                }
            }

        });

        $urlRouterProvider.otherwise('home');
    });