(function () {
  'use strict';

  angular
    .module('ponder.authentication', [
      'ponder.authentication.controllers',
      'ponder.authentication.services'
    ]);

  angular
    .module('ponder.authentication.controllers', []);

  angular
    .module('ponder.authentication.services', ['ngCookies']);
})();
