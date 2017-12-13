var app = angular.module('myapp', []);

app.controller("MyCtrl", function ($scope) {
    $scope.title = "AngularJS Training!!";
$scope.sayHi=function(){
    $scope.SelectedStudent=null;

};
$scope.students=[
{
    Name:"Nitin",    
    dob:"19-01-2001",
    department:"Software"
},
{
    Name:"Arun",    
    dob:"19-01-2010",
    department:"Hardware"
},
{
    Name:"aruna",    
    dob:"19-01-2000",
    department:"Maintainace"
},
{
    Name:"Lily",    
    dob:"19-01-1985",
    department:"Admin"
},
{
    Name:"JP",    
    dob:"19-01-1947",
    department:"Commerce"
}
];

$scope.onStudentSelect=function(item){
    $scope.SelectedStudent=item;

};
});