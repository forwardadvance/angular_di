// JavaScript does not have named parameters
// Inject $scope, $log, $http
// alert(fnc)
// Minification safe square brace annotations ['$scope', function($scope){}]
// ng-annotate
// Injecting another module
// ngSanitize



var fnc = function(b, a) {
  return [a, b].join(' ');
}

// var a = "Hello";
// var b = "World";
// alert(fnc(a, b));

angular.module('app', [])
  .controller('myController', function($log, $scope) {
    $scope.hello = "Hello from the Scope";
    $log.log('hello from the log');
  })
  .service('myService', function() {})



// angular.module('app', [])
//   .controller('myController', ["$log", "$scope", function($log, $scope) {
//     $scope.hello = "Hello from the Scope";
//     $log.log('hello from the log');
//   }])
//   .service('myService', function() {})

// var a = [
//   "Hello",
//   "From",
//   "Angular"
//   ].join(' ');

// alert(a)










// Injecting another module

// Initial State

// var fnc = function() {
//   a = "Hello";
//   b = "World";
//   return [a, b].join(' ');
// }
// alert(fnc);

// angular.module('app', [])
//   .controller('myController', function() {
// });



