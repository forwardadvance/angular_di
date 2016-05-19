angular.module('app', [])
  .controller('HenchmenController', function($scope, $http) {

    $scope.search = {}

    $scope.henchmen = [
      {
        name: "Tuna the Terrible",
        evilness: 3
      },
      {
        name: "Monglestonk Mindcontroller",
        evilness: 6
      },
      {
        name: "Frank Foxface",
        evilness: 5
      },
      {
        name: "Eric Evilpants",
        evilness: 9
      }
    ];

  })
