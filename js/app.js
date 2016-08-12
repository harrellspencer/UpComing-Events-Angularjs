var ToDo = angular.module('ToDo', []);

ToDo.controller('myController', ['$scope', function($scope){
    $scope.items = [
        {
            "id": "1",
            "activityName": "Test Quote",
            "expiration_date": "5/14/2016",
        },
        {
            "id": "2",
            "activityName": "Atlatl Qoute",
            "expiration_date": "5/21/2016",
        },
        {
            "id": "3",
            "activityName": "PriceBooks Quote",
            "expiration_date": "5/18/2016",
        }
        ];
        $scope.remove = function(index) {
            $scope.items.splice(index, 1);
        };
    }]);
        ToDo.controller('myController1', ['$scope', function($scope){
    $scope.items = [

        {
            "id": "1",
            "activityName": "Test Meeting",
            "start_date": "5/24/2016",
           
        
        },
        {
            "id": "2",
            "activityName": "Atlatl Meeting",
            "start_date": "5/15/2016"
        },
        {
            "id": "3",
            "activityName": "PriceBooks Meeting",
            "start_date": "5/19/2016"
        },
    ];
    $scope.remove = function(index) {
            $scope.items.splice(index, 1);
        };
}]);
ToDo.controller('myController2', ['$scope', function($scope){
    $scope.items = [

        {
            "id": "1",
            "activityName": "Test Task",
            "due_date": "5/17/2016",
           
        
        },
        {
            "id": "2",
            "activityName": "Atlatl Meeting",
            "due_date": "5/19/2016"
        },
        {
            "id": "3",
            "activityName": "PriceBooks Task",
            "due_date": "5/20/2016"
        },
    ];
    $scope.remove = function(index) {
            $scope.items.splice(index, 1);
        };
}]);
 ToDo.controller('myController3', ['$scope', function($scope){
    $scope.items = [

        {
            "id": "1",
            "activityName": "Test Opportunity",
            "expected_close": "5/22/2016",
           
        
        },
        {
            "id": "2",
            "activityName": "Atlatl Opportunity",
            "expected_close": "5/22/2016"
        },
        {
            "id": "3",
            "activityName": "PriceBooks Opportunity",
            "expected_close": "5/19/2016"
        },
    ];
    $scope.remove = function(index) {
            $scope.items.splice(index, 1);
        };
}]);

 function Ctrl($scope)
 {
    $scope.date = new Date();
 }


