var app = angular.module("exampleApp",[]);

app.controller("topLevelCtrl",function($scope){

    $scope.reverseText = function(){
       console.log("In base reverse text");
    }

    $scope.changeCase = function(){
       console.log("In base change case");
    }
});

app.controller("firstChildCtrl",function($scope){

    $scope.reverseText = function(){
       console.log("In first child reverse text");
    }
});

app.controller("secondChildCtrl",function($scope){

    $scope.shiftText = function(){
       console.log("In second child Shift text");
    }
});