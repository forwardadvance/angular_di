// Services are for storing persistent data and keeping functions together
// Services are singletons
// Hello Service
// Hello Factory
// Github Service
// Test by injecting $service
// Factories are for generating objects directly

angular.module('app', [])
  .value('greeting', {a:123})
  .factory('greetingFactory', function() {
    return {a:123}
  })
  .service('helloService', function() {
    this.sayHello = () => alert('hello');
  })
  .factory('helloFactory', function() {
    return {
      sayHello: function() {alert('hello')}
    }
  })
  .controller('demoController', function(greetingFactory, $scope, helloFactory) {
    $scope.greeting = greetingFactory;
    helloFactory.sayHello();
  })




  // .service('helloService', function() {
  //   this.sayHello = function() {
  //     alert('hello');
  //   };
  //   this.sayGoodbye = function() {
  //     alert('goodbye');
  //   };
  // })
  // .factory('helloFactory', function() {
  //   return {
  //     sayHello: function() {
  //       alert('hello');
  //     },
  //     sayGoodbye: function() {
  //       alert('goodbye');
  //     }
  //   }
  // })




// angular.module('hello', [])
//   .service('helloService', function() {
//     this.sayHello = function() {
//       alert('hello');
//     };
//     this.sayGoodbye = function() {
//       alert('goodbye');
//     }
//   })
//   .factory('helloFactory', function() {
//     return {
//       sayHello: function() {
//         alert('hello');
//       },
//       sayGoodbye: function() {
//         alert('goodbye');
//       }
//     }
//   });




// Initial state
// angular.module('app', [])
//   .controller('demoController', function() {
//   })
