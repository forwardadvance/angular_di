angular.module('app', ['ngDialog'])
  .controller('PopupController', function($scope, ngDialog) {
    $scope.popup = function() {
      ngDialog.open({
        template: '<p>Why Hello There!</p>',
        className: 'ngdialog-theme-plain',
        plain: true
      });
    }
  })
