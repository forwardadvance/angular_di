// JavaScript does not have named parameters
// Inject $scope, $log, $http
// alert(fnc)
// Minification safe square brace annotations ['$scope', function($scope){}]
// ng-annotate
// Injecting another module
// ngSanitize


// var fnc = function( b, a ) {
//   return [a, b].join(' ');
// }

// var x = "Hello";
// var y = "World";
// alert( fnc( y, x ) );

var controller = function($log, $scope) {
  $scope.hello = "Hi there";
  $log.log('hello!');
};
controller.$inject = ['$log', '$scope'];

angular.module('app', [])
  .controller('myController', controller);


// angular.module('app', [])
//   .controller('myController', ["$log", "$scope", function($log, $scope) {
//     $scope.hello = "Hello from the Scope";
//     $log.log('hello from the log');
//   }])
//   .service('myService', function() {})









// Injecting another module

// Initial State

// var fnc = function() {
//   var a = "Hello";
//   var b = "World";
//   return [a, b].join(' ');
// }
// alert(fnc);

// angular.module('app', [])
//   .controller('myController', function() {
// });



