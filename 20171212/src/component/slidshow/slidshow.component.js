angular.module('myApp')
    .component('slidShow', {
        templateUrl: 'src/component/slidshow/slidshow.component.html',
        bindings: {
            isDisplayMessage: '=',
            imageArray: '<'
        },
        controller: function () {
            this.index = 0;            
            this.onSlidClick = function (val) {                           
                if (this.index === 0 && val === -1) {
                    this.index = this.imageArray.length;
                }
                if (this.index === this.imageArray.length - 1 && val === 1) {
                    if (this.isDisplayMessage != null)
                        this.isDisplayMessage = true;
                    else
                        this.index = -1;
                }
                this.index += val;

            }
        }
    });