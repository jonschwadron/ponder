(function () {
  'use strict';

  angular
    .module('ponder.posts', [
      'ponder.posts.controllers',
      'ponder.posts.directives',
      'ponder.posts.services'
    ]);

  angular
    .module('ponder.posts.controllers', []);

  angular
    .module('ponder.posts.directives', ['ngDialog']);

  angular
    .module('ponder.posts.services', []);
})();
