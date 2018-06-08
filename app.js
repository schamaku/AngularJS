(function () {
'use strict';

angular.module('myApp', [])

.controller('myController', function ($scope) {
  $scope.message = "";
  $scope.list = "";
  $scope.checkIfTooMuch = function () {
      var dishes = $scope.list.split(',');
      if($scope.list == "") {
          $scope.message = "Please enter data first";
      }
           else if(dishes.length == 0) {
              $scope.message = "Empty";
          } else if(dishes.length <= 3) {
              $scope.message = "Enjoy!";
          } else if(dishes.length >3){
              $scope.message = "Too much!";
          }


  };


});


})();
