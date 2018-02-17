(function() {
  'use strict';

  angular
    .module('angularMaterial')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1518752906458;
    vm.showToastr = showToastr;
    vm.hello = 'hello world'

    vm.todos = [
      { title: 'Pepperoni', checked: false },
      { title: 'Sausage', checked: false },
      { title: 'Black Olives', checked: false },
      { title: 'Green Peppers', checked: true }
    ];

    vm.addTodo = function () {
      console.log(vm.todo)
      vm.todos.push({
        title: vm.todo,
        checked: true
      })
    }

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
