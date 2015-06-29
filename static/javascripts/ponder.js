(function () {
  'use strict';

  angular
    .module('ponder', [
      'ponder.config',
      'ponder.routes',
      'ponder.accounts',
      'ponder.authentication',
      'ponder.layout',
      'ponder.posts',
      'ponder.utils'
    ]);

  angular
    .module('ponder.config', []);

  angular
    .module('ponder.routes', ['ngRoute']);

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
