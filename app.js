var app = angular.module('kidscheckin', ['ui.bootstrap']);

app.controller('MainCtrl',['$scope','$http', function($scope, $http) {
    $scope.check = true;
    $scope.page = "CheckIn";

    //$.getJSON("Family.json", function( data ) {
    //    $scope.family = data;
    //}).error(function (data){
    //
    //});
    $scope.family = "";

    $scope.empty = "";

      $scope.add = function(v) {
        var fam = $scope.family;
        for(var i = 0; i < fam.length; i++){
            if (fam[i].family === v){
                v = fam[i].children;
            }
        }
        $scope.men.push(v);
        $scope.newname = null;
      };

       $scope.remove = function (num,v) {
        if($scope.women.length === 1){
          $scope.empty = true;
        }
            if(num === 1){
                $scope.men.splice(v,1);
            }else if(num === 2){
                $scope.women.splice(v,1);
            }
      };
      $scope.move = function (man,v){
            $scope.women.push(man);
            $scope.men.splice(v,1);
      };
      $scope.move_one = function (man,v){
        $scope.men.push(man);
        $scope.people.splice(v,1);
      };

      $scope.transfer = function ($event,index,array){
          array.push($data);
      };

      $scope.people = [
      ];

      $scope.men = [
          ];

        $scope.women = [
          ];

          $scope.addText = "";


          $scope.dropSuccessHandler = function($event,index,array){
              array.splice(index,1);

          };

          $scope.onDrop = function($event,$data,array){
              array.push($data);
              $scope.empty = false;
          };
         $scope.selected = undefined;

        $.getJSON("Family.json", function( data ) {
            $scope.states = data.map(function (item) {
                return item.family;
            });
        }).error(function (data){

        });
}]);
