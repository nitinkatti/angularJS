var app = angular.module('myappSlidShow', []);

app.controller("MyCtrlSlidShow", function ($scope) {
    $scope.imageList = [
        "https://cdn.pixabay.com/photo/2015/06/22/08/38/child-817368_960_720.jpg",
        "http://www.cachouston.org/media/files/story/b459d7d9/children-rotator.jpg",
        "https://www.uidaho.edu/-/media/UIdaho-Responsive/Images/current-students/childrens-center/children-in-a-circle.ashx",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwst7rGUoEAi2evIRSn6MvQGoLgRr4DRYk9xujUva1EHXw3KY",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbVC2zy14cXANQnHZ8whOja18yyxLcp1tBBaP6TnsiOJ_9EnyLQ"
    ];
$scope.index=0;
$scope.onSlidClick=function(val){
    if($scope.index===0 && val===-1)
    {
        $scope.index=$scope.imageList.length;
    }
    if($scope.index===$scope.imageList.length-1 && val===1)
    {
        $scope.index=-1;
    }
    $scope.index+=val;
}
});

app.controller("MyCtrlCal", function ($scope) {
    
        $scope.onTextChange=function()
        {
            $scope.isCalculated = false;
        }
    
        $scope.onOperatorClick = function (operator) {
    
            $scope.isCalculated = true;
    
            if (operator === "+") {
                $scope.result = parseFloat($scope.input1) + parseFloat($scope.input2);
            }
            if (operator === "-") {
                $scope.result = parseFloat($scope.input1) - parseFloat($scope.input2);
            }
            if (operator === "/") {
                $scope.result = parseFloat($scope.input1) / parseFloat($scope.input2);
            }
            if (operator === "*") {
                $scope.result = parseFloat($scope.input1) * parseFloat($scope.input2);
            }
        }
    });