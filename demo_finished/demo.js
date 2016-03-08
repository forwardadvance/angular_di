angular.module('app', ['myModule', 'ngSanitize'])
// myModule and ngSanitize have been included

angular.module('myModule', [])
  .controller('myController', function($log, $scope) {
    // Scope and log have been injected
    $scope.hello = "<strong>Hello from the Scope</strong>";
    $log.log('hello from the log');
  })
  .service('myService', function() {})
