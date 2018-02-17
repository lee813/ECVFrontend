(function() {
  'use strict';

  angular
    .module('angularMaterial')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
