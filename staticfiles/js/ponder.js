(function () {
  'use strict';

  angular
    .module('ponder', [
      'ponder.routes',
      'ponder.authentication'
    ]);

  angular
    .module('ponder.routes', ['ngRoute']);

  angular
    .module('ponder', [
     'ponder.config',
     // ...
   ]);

  angular
    .module('ponder.config', []);

  angular
   .module('ponder')
   .run(run);

  run.$inject = ['$http'];

  /**
  * @name run
  * @desc Update xsrf $http headers to align with Django's defaults
  */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  } 

})();
