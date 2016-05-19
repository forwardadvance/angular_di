var app = angular.module('app', [])
  .controller('titleController', function($scope, cartService) {
    $scope.items = cartService.items;
  })
  .controller('cartController', function($scope, cartService) {
    $scope.items = cartService.items;
    $scope.addCat = () => {
      cartService.addItem({name: 'Cat', price: "4.5"})
    };
    $scope.addSheep = () => {
      cartService.addItem({name: 'Sheep', price: "19.75"})
    };
  })

  .service('cartService', function() {
    var _this = this;
    this.items = [];
    this.addItem = ( item ) => {
      _this.items.push( item );
    }
  });
