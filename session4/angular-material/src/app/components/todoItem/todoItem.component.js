(function () {
    'use strict';

    angular
        .module ('angularMaterial')
        .component ('todoItem', component());


    function component() {

        function componentController(){
            var vm = this;
            
            init();

            function init(){
                console.log(vm)
                var style = {}
                if(vm.checked){
                    style["text-decoration"] = "line-through"
                }
                vm.style = style
            }
        }

        return {
            bindings: {
                title: '<',
                checked: '<'
            },
            controller: componentController,
   
            templateUrl: 'app/components/todoItem/todoItem.html'
        }
    }

} ());